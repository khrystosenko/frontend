import Ember from 'ember';
import { storageFor } from 'ember-local-storage';

export default Ember.Service.extend({
  currentLocaleStorage: storageFor('currentLocale'),
  setLocale(locale) {
    return this.set('currentLocaleStorage.locale', locale);
  },
  getLocale() {
    return this.get('currentLocaleStorage.locale');
  },
  clearLocale() {
    return this.get('setLocale')();
  }
});
