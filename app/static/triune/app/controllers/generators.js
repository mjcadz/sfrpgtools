import Controller from '@ember/controller';

const CHARACTER_GENERATOR = 'Character Generator';

const generators = [
  CHARACTER_GENERATOR,
];

export default Controller.extend({
  generators,
  selectedGenerator: CHARACTER_GENERATOR,
  CHARACTER_GENERATOR,
});
