import Controller from '@ember/controller';
import { inject as service } from '@ember/service';
import { computed } from '@ember/object';
import { alias } from '@ember/object/computed';
import { storageFor } from 'ember-local-storage';
import {
  PACT_WORLDS,
  ages,
  alignments,
  classes,
  themes,
  pwThemes,
  professions,
  personalities,
  origins,
  characterTraits,
} from 'triune/data';

import { randomElement, articlize } from 'triune/utils';

export default Controller.extend({
  sources: service(),

  selectedSource: alias('sources.selected'),

  characters: storageFor('characters'),

  noSourcesSelected: computed('selectedSource', function() {
    return !(this.selectedSource && this.selectedSource.length);
  }),

  clear() {
    this.characters.reset();
  },

  generate() {
    const pactWorldsSelected = this.sources.includes(PACT_WORLDS);

    const candidateRaces = this.sources.availableRaces;

    const candidateThemes = themes.concat(
      pactWorldsSelected && pwThemes
    ).filter(Boolean);

    const theme1 = randomElement(candidateThemes);
    const theme2 = randomElement(candidateThemes.reject(theme => theme === theme1));

    const content = {
      age: randomElement(ages),
      alignment: randomElement(alignments),
      race: randomElement(candidateRaces),
      class: randomElement(classes),
      themes: `${theme1} and ${theme2}`,
      profession: randomElement(professions),
      characterTrait: randomElement(characterTraits),
      personality: randomElement(personalities),
      origin: randomElement(origins),
    };

    content.summary = `${articlize(content.age.toLowerCase(), true)} ${content.race.toLowerCase()} ${content.class.toLowerCase()} who ${content.characterTrait.toLowerCase()} and comes from ${content.origin.toLowerCase()}. They are ${content.personality.toLowerCase()}, and have found work as ${content.profession.toLowerCase()}.`

    this.characters.insertAt(0, content);
  },
});
