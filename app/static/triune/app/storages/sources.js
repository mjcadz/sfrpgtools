import StorageArray from 'ember-local-storage/local/array';
import {
  sources,
} from 'triune/data';

const Storage = StorageArray.extend();

// Uncomment if you would like to set initialState
// Storage.reopenClass({
//   initialState() {
//     return [...sources];
//   }
// });

export default Storage;
