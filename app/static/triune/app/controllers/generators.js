import Controller from '@ember/controller';
import { computed } from '@ember/object';
import { inject as service } from '@ember/service';
import { alias } from '@ember/object/computed';

const CHARACTER_GENERATOR = 'Character Generator';
const SETTLEMENT_GENERATOR = 'Settlement Generator';

const generators = {
  [CHARACTER_GENERATOR]: 'character-generator',
  [SETTLEMENT_GENERATOR]: 'settlement-generator',
};

export default Controller.extend({
  sourcesService: service('sources'),
  selectedSource: alias('sourcesService.selected'),
  sources: alias('sourcesService.all'),

  generators: computed(function() {
    return Object.keys(generators);
  }),
  selectedGenerator: CHARACTER_GENERATOR,

  CHARACTER_GENERATOR,
  SETTLEMENT_GENERATOR,

  selectGenerator(generator) {
    this.transitionToRoute(`generators.${generators[generator]}`);
  }
});
