import Service from '@ember/service';
import {
  sources,
} from '../data';

export default Service.extend({
  all: sources,
  selected: sources,

  includes(source) {
    return this.selected.includes(source);
  }
});
