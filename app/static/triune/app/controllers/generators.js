import Controller from '@ember/controller';
import { computed } from '@ember/object';
import { inject as service } from '@ember/service';

const CHARACTER_GENERATOR = 'Character Generator';
const SETTLEMENT_GENERATOR = 'Settlement Generator';

const generators = [
  {
    name: CHARACTER_GENERATOR,
    slug: 'generators.character-generator',
  },
  {
    name: SETTLEMENT_GENERATOR,
    slug: 'generators.settlement-generator',
  }
];

export default Controller.extend({
  sources: service(),
  router: service(),

  generators: computed(function() {
    return generators.map(gen => gen.name);
  }),
  selectedGenerator: computed('router.currentRoute', function() {
    return generators.find(gen => gen.slug === this.router.currentRouteName).name;
  }),

  CHARACTER_GENERATOR,
  SETTLEMENT_GENERATOR,

  selectSources(selectedSources) {
    if (!selectedSources.length) return;
    this.sources.select(selectedSources);
  },

  selectGenerator(generator) {
    this.router.transitionTo(`${generators.find(gen => gen.name === generator).slug}`);
  }
});
