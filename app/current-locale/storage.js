import Ember from 'ember';
import StorageObject from 'ember-local-storage/local/object';

const Storage = StorageObject.extend();
const defaultBrowserLocale = navigator.language || navigator.userLanguage;

Storage.reopenClass({
  initialState() {
    return { locale: defaultBrowserLocale || 'en' };
  }
});

export default Storage;