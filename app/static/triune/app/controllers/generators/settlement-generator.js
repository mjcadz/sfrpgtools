import Controller from '@ember/controller';
import { computed } from '@ember/object';
import { not } from '@ember/object/computed';
import { inject as service } from '@ember/service';
import { storageFor } from 'ember-local-storage';
import {
  citiesBySize,
  CITY_SIZE_EMPTY,
  CITY_SIZE_TINY,
  CITY_SIZE_SMALL,
  CITY_SIZE_MEDIUM,
  CITY_SIZE_LARGE,
  CITY_SIZE_HUGE,

  settlementNames,
  settlementNameSuffixes,
  settlementNamePrefixes,
  alignments,
  settlementQualities,
  governments,
  numberOfShops,
  deities,
  placesofWorship,
  wateringHoles,
  buildingFlavors,
  stores,
  placesOfInterest,
} from 'triune/data';
import { randomElement, randomInt } from 'triune/utils';
import { numberWithCommas } from '../../utils';

const ANY_SIZE = 'Any size';
const ANY_MAX_ITEM_LEVEL = 'Any max item level';

const maxItemLevels = [
  ANY_MAX_ITEM_LEVEL,
  '1st', '2nd', '3rd',
  '4th', '5th', '6th',
  '7th', '8th', '9th',
  '10th', '11th', '12th',
  '13th', '14th', '15th',
  '16th', '17th', '18th',
  '19th', '20th',
];

export default Controller.extend({
  sources: service(),

  settlementContent: storageFor('settlements'),

  settlementsGenerated: not('noSettlementsGenerated'),
  noSettlementsGenerated: not('settlementContent.length'),

  sizes: computed(function() {
    return [ANY_SIZE, ...Object.keys(citiesBySize).map(size => size.capitalize())];
  }),
  selectedSize: computed(function() {
    return this.sizes[0];
  }),

  maxItemLevels,
  selectedMaxItemLevel: maxItemLevels[0],

  clear() {
    this.settlementContent.reset();
  },

  generateQualities(possibleQualityCounts) {
    const numQualities = randomElement(possibleQualityCounts);
    const techName = 'Tech';
    const qualities = [];
    for (let i = 0; i < numQualities; i++) {
      let newQual = randomElement(Object.keys(settlementQualities));
      if (newQual === techName) {
        newQual = randomElement(Object.keys(settlementQualities[techName]));
      }
      if (!qualities.includes(newQual)) {
        qualities.push(newQual);
      }
    }
    return qualities;
  },

  generateWateringHole() {
    const name = `The ${randomElement(wateringHoles.prefixes)} ${randomElement(wateringHoles.suffixes)}`;
    const description = `This ${randomElement(wateringHoles.establishment)} ${randomElement(wateringHoles.flavor).toLowerCase()} and ${randomElement(buildingFlavors).toLowerCase()}`;

    return {
      name,
      description,
    };
  },

  generateStore() {
    const name = randomElement(Object.keys(stores));
    const description = `This ${name.toLowerCase()} ${randomElement(stores[name].flavor).toLowerCase()} and ${randomElement(buildingFlavors).toLowerCase()}`;

    return {
      name,
      description,
    };
  },

  generatePlaceOfInterest() {
    const name = randomElement(Object.keys(placesOfInterest));
    const description = `This ${name.toLowerCase()} ${randomElement(placesOfInterest[name].flavor).toLowerCase()} and ${randomElement(buildingFlavors).toLowerCase()}`;

    return {
      name,
      description,
    };
  },

  generatePlaceOfWorship(alignment) {
    const alignmentAbbr = alignment.match(/\b(\w)/g).join('');
    const alignedDeities = []

    for (const deity of Object.keys(deities)) {
      if (deities[deity].Align === alignmentAbbr) {
        alignedDeities.push(deity);
      }
    }

    const chosenDeity = randomElement(alignedDeities);
    const displayDeityName = randomElement([
      `${deities[chosenDeity].Title} (${chosenDeity})`,
      chosenDeity,
    ]);

    const name = randomElement(placesofWorship.names).replace('DX', displayDeityName);
    const flavor = randomElement(placesofWorship.flavor).replace('SX', deities[chosenDeity].Symbol).toLowerCase();

    return {
      name,
      description: `This place of worship ${flavor}`,
    };
  },

  generatePlacesOfInterest(size, alignment) {
    const places = [];
    let selectedPlaceOfWorship = false;

    for (let i = 0; i < numberOfShops[size.toLowerCase()]; i++){
      //only one place of worship
      const validTypes = [
        'bar',
        'shop',
        'place'
      ].concat(selectedPlaceOfWorship ? [] : ['worship']);

      var type = randomElement(validTypes);
      let place;
      switch(type) {
        case 'bar':
          place = this.generateWateringHole();
          break;
        case 'worship':
          place = this.generatePlaceOfWorship(alignment);
          selectedPlaceOfWorship = true
          break;
        case 'shop':
          place = this.generateStore();
          break;
        case 'place':
          place = this.generatePlaceOfInterest();
          break;

      }

      places.push(place);
    }

    return places;
  },

  sumArray(arr) {
    return arr.reduce((x, y) => x + y, 0);
  },

  randomPercentages(maxLength = 5) {
    const percentages = [randomInt(1, 100)];
    if (maxLength < 2) return [100];
    let sum = this.sumArray(percentages);
    while (
      sum < 100,
      percentages[percentages.length - 1] > 1 &&
      percentages.length + 1 < maxLength
    ) {
      percentages.push(randomInt(1, 100 - sum));
      sum = this.sumArray(percentages);
    }
    sum = this.sumArray(percentages);
    if (sum < 100) percentages.push(100 - sum);
    return percentages.sort((a, b) => b - a);
  },

  randomPercentagesWithRaces(pop) {
    const percentages = this.randomPercentages(
      pop < 21
      ? 1
      : randomElement([2, 3, 4, 5, 6])
    );
    let candidateRaces = [...this.sources.availableRaces];
    const demoParts = [];
    for (const percentage of percentages) {
      const race = randomElement(candidateRaces);
      candidateRaces = candidateRaces.reject(r => r === race);
      demoParts.push(`${percentage}% ${race}`);
    }
    return `(${demoParts.join(', ')})`;
  },

  calculatePopulationAndDemographics(type, size) {



    let pop = 0;
    switch (size) {
      case CITY_SIZE_EMPTY:
          pop = 0;
          break;
      case CITY_SIZE_TINY:
          pop = randomInt(2, 200);//two to two hundred
          break;
      case CITY_SIZE_SMALL:
          pop = randomInt(200, 20000);//two hundred to twenty thousand
          pop = Math.round(pop/10)*10;
          break;
      case CITY_SIZE_MEDIUM:
          pop = randomInt(20000, 2000000);//twenty thousand to two million
          pop = Math.round(pop/100)*100;
          break;
      case CITY_SIZE_LARGE:
          pop = randomInt(2000000, 200000000);//two million to two hundred million
          pop = Math.round(pop/1000)*1000;
          break;
      case CITY_SIZE_HUGE:
          pop = randomInt(200000000, 20000000000);//two hundred million to twenty billion
          pop = Math.round(pop/1000000)*1000000;
          break;
    }

    if (["lone tavern","camp site","farm"].includes(type)) {
      pop = randomInt(2, 20);
    } else if (["planetwide city"].includes(type)) {
      pop = Math.round(randomInt(20000000000, 2000000000000)/1000000000)*1000000000;
    }

    const demographics = this.randomPercentagesWithRaces(pop);

    return `${numberWithCommas(pop)} ${demographics}`;
  },

  generate() {
    const size = (this.selectedSize === ANY_SIZE ? randomElement(this.sizes.slice(1)) : this.selectedSize).toLowerCase();
    const alignment = randomElement(alignments);
    const maxItemLevel = this.selectedMaxItemLevel === ANY_MAX_ITEM_LEVEL ? randomElement(this.maxItemLevels) : this.selectedMaxItemLevel;

    const candidateNames = [];
    candidateNames.push(randomElement(settlementNames));
    candidateNames.push(randomElement(settlementNamePrefixes) + randomElement(settlementNameSuffixes));
    candidateNames.push(randomElement(settlementNamePrefixes) + randomElement(settlementNameSuffixes));

    const qualities = this.generateQualities([1, 2, 3]);

    const placesOfInterest = this.generatePlacesOfInterest(size, alignment);

    const type = randomElement(citiesBySize[size.toLowerCase()]);

    this.settlementContent.insertAt(0, {
      size,
      type,
      alignment,
      population: this.calculatePopulationAndDemographics(type, size),
      qualities: qualities.join(', '),
      name: randomElement(candidateNames),
      maxItemLevel,
      government: randomElement(governments),
      placesOfInterest,
    });
  },
});
