import Component from '@ember/component';
import { set } from '@ember/object';
import {
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
} from '../data';

import { randomElement, articlize } from '../utils';

const CORE_RULEBOOK = 'Core Rulebook';
const CORE_RULEBOOK_LEGACY = 'Core Rulebook Legacy';
const ALIEN_ARCHIVE = 'Alien Archive';
const PACT_WORLDS = 'Pact Worlds';

const sources = [
  CORE_RULEBOOK,
  CORE_RULEBOOK_LEGACY,
  ALIEN_ARCHIVE,
  PACT_WORLDS,
];

export default Component.extend({
  sources,
  selectedSource: sources,
  generatedContent: null,

  generate() {
    const coreSelected = this.selectedSource.includes(CORE_RULEBOOK);
    const coreLegacySelected = this.selectedSource.includes(CORE_RULEBOOK_LEGACY);
    const alienArchiveSelected = this.selectedSource.includes(ALIEN_ARCHIVE);
    const pactWorldsSelected = this.selectedSource.includes(PACT_WORLDS);

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

    set(this, 'generatedContent', content);
  },
})
