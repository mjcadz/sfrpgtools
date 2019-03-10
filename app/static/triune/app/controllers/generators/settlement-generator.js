import Controller from '@ember/controller';
import { set, computed } from '@ember/object';
import { not } from '@ember/object/computed';
import { storageFor } from 'ember-local-storage';
import {
  citiesBySize,
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
import { randomElement } from 'triune/utils';

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

  generate() {
    const size = this.selectedSize === ANY_SIZE ? randomElement(this.sizes.slice(1)) : this.selectedSize;
    const alignment = randomElement(alignments);
    const maxItemLevel = this.selectedMaxItemLevel === ANY_MAX_ITEM_LEVEL ? randomElement(this.maxItemLevels) : this.selectedMaxItemLevel;

    const candidateNames = [];
    candidateNames.push(randomElement(settlementNames));
    candidateNames.push(randomElement(settlementNamePrefixes) + randomElement(settlementNameSuffixes));
    candidateNames.push(randomElement(settlementNamePrefixes) + randomElement(settlementNameSuffixes));

    const qualities = this.generateQualities([1, 2, 3]);

    const placesOfInterest = this.generatePlacesOfInterest(size, alignment);

    // const population = populationForLocation

    this.settlementContent.insertAt(0, {
      size,
      alignment,
      qualities: qualities.join(', '),
      type: randomElement(citiesBySize[size.toLowerCase()]),
      name: randomElement(candidateNames),
      maxItemLevel,
      government: randomElement(governments),
      placesOfInterest,
    });
  },
});
