import StorageObject from 'ember-local-storage/local/object';

const Storage = StorageObject.extend();

Storage.reopenClass({
  initialState() {
    return { vote: { id: null, email: '' }};
  }
});

export default Storage;