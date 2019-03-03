import Controller from '@ember/controller';
import { set, computed } from '@ember/object';
import { not } from '@ember/object/computed';
import {
  citiesBySize,
  settlementNames,
  settlementNameSuffixes,
  settlementNamePrefixes,
  alignments,
  settlementQualities,
} from '../../data';
import { randomElement } from '../../utils';

const ANY_SIZE = 'Any Size';
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
  settlementContent: computed(function() {
    return [];
  }),

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
    set(this, 'settlementContent', []);
  },

  generate() {
    const size = this.selectedSize === ANY_SIZE ? randomElement(this.sizes) : this.selectedSize;
    const maxItemLevel = this.selectedMaxItemLevel === ANY_MAX_ITEM_LEVEL ? randomElement(this.maxItemLevels) : this.selectedMaxItemLevel;

    const candidateNames = [];
    candidateNames.push(randomElement(settlementNames));
    candidateNames.push(randomElement(settlementNamePrefixes) + randomElement(settlementNameSuffixes));
    candidateNames.push(randomElement(settlementNamePrefixes) + randomElement(settlementNameSuffixes));

    const numQualities = randomElement([1, 2, 3]);
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

    this.settlementContent.pushObject({
      size,
      alignment: randomElement(alignments),
      qualities: qualities.join(', '),
      type: randomElement(citiesBySize[size.toLowerCase()]),
      name: randomElement(candidateNames),
      maxItemLevel,
    });
  },
});
