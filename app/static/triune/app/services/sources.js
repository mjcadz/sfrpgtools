import Service from '@ember/service';
import { computed } from '@ember/object';
import { storageFor } from 'ember-local-storage';
import {
  sources,
  CORE_RULEBOOK,
  CORE_RULEBOOK_LEGACY,
  ALIEN_ARCHIVE,
  PACT_WORLDS,

  races,
  legacyRaces,
  aaRaces,
  pwRaces,
} from 'triune/data';

export default Service.extend({
  init() {
    this._super(...arguments);
    if (!this.selected.length) this.selected.setObjects(this.all);
  },

  all: sources,
  selected: storageFor('sources'),

  select(sources) {
    this.selected.setObjects(sources);
  },

  includes(source) {
    return this.selected.includes(source);
  },

  availableRaces: computed('selected', function() {
    const coreSelected = this.includes(CORE_RULEBOOK);
    const coreLegacySelected = this.includes(CORE_RULEBOOK_LEGACY);
    const alienArchiveSelected = this.includes(ALIEN_ARCHIVE);
    const pactWorldsSelected = this.includes(PACT_WORLDS);

    return [].concat(
      coreSelected && races,
      coreLegacySelected && legacyRaces,
      alienArchiveSelected && aaRaces,
      pactWorldsSelected && pwRaces
    ).filter(Boolean);
  }),
});
