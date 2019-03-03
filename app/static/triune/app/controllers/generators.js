import Controller from '@ember/controller';
import { computed } from '@ember/object';
import { inject as service } from '@ember/service';
import { alias } from '@ember/object/computed';

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
  sourcesService: service('sources'),
  selectedSource: alias('sourcesService.selected'),
  sources: alias('sourcesService.all'),
  router: service(),

  generators: computed(function() {
    return generators.map(gen => gen.name);
  }),
  selectedGenerator: computed('router.currentRoute', function() {
    return generators.find(gen => gen.slug === this.router.currentRouteName).name;
  }),

  CHARACTER_GENERATOR,
  SETTLEMENT_GENERATOR,

  selectGenerator(generator) {
    this.router.transitionTo(`${generators.find(gen => gen.name === generator).slug}`);
  }
});
