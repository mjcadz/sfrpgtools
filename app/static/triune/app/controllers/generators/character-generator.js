import Controller from '@ember/controller';
import { inject as service } from '@ember/service';
import { set, computed } from '@ember/object';
import { alias } from '@ember/object/computed';
import {
  CORE_RULEBOOK,
  CORE_RULEBOOK_LEGACY,
  ALIEN_ARCHIVE,
  PACT_WORLDS,

  races,
  legacyRaces,
  aaRaces,
  pwRaces,
  ages,
  alignments,
  classes,
  themes,
  pwThemes,
  professions,
  personalities,
  origins,
  characterTraits,
} from '../../data';

import { randomElement, articlize } from '../../utils';

export default Controller.extend({
  sources: service(),

  selectedSource: alias('sources.selected'),

  characters: computed(function() {
    return [];
  }),

  noSourcesSelected: computed('selectedSource', function() {
    return !(this.selectedSource && this.selectedSource.length);
  }),

  clear() {
    set(this, 'characters', []);
  },

  generate() {
    const coreSelected = this.sources.includes(CORE_RULEBOOK);
    const coreLegacySelected = this.sources.includes(CORE_RULEBOOK_LEGACY);
    const alienArchiveSelected = this.sources.includes(ALIEN_ARCHIVE);
    const pactWorldsSelected = this.sources.includes(PACT_WORLDS);

    const candidateRaces = [].concat(
      coreSelected && races,
      coreLegacySelected && legacyRaces,
      alienArchiveSelected && aaRaces,
      pactWorldsSelected && pwRaces
    ).filter(Boolean);

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
