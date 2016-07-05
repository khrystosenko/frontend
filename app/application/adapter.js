import Ember from 'ember';
import DRFAdapter from 'ember-django-adapter/adapters/drf';
import config from 'roomit-frontend/config/environment';

export default DRFAdapter.extend({
  i18n: Ember.inject.service(),
  namespace: config.APP.API_NAMESPACE,
  host: config.APP.API_HOST,
  lang: Ember.computed('i18n.locale', {
    get() {
      return this.get('i18n.locale') || '';
    }
  }),
  buildURL() {
    const lang = Ember.get(this, 'lang');

    return this._super.apply(this, arguments) + `?lang=${lang}`;
  }
});

