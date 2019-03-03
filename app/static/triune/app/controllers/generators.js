import Controller from '@ember/controller';
import { sources } from '../data';

const CHARACTER_GENERATOR = 'Character Generator';
const SETTLEMENT_GENERATOR = 'Settlement Generator';

const generators = [
  CHARACTER_GENERATOR,
  SETTLEMENT_GENERATOR,
];

export default Controller.extend({
  generators,
  selectedGenerator: CHARACTER_GENERATOR,

  CHARACTER_GENERATOR,
  SETTLEMENT_GENERATOR,

  sources,
  selectedSource: sources,
});
