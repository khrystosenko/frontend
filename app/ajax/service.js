import Ember from 'ember';
import AjaxService from 'ember-ajax/services/ajax';
import config from 'roomit-frontend/config/environment';

export default AjaxService.extend({
  i18n: Ember.inject.service(),
  namespace: config.APP.API_NAMESPACE,
  host: config.APP.API_HOST,
  // headers: Ember.computed('i18n.locale', {
  //   get() {
  //     let headers = {};
  //     const locale = this.get('i18n.locale');

  //     if (locale) {
  //       headers['Accept-Language'] = locale;
  //     }

  //     return headers;
  //   }
  // }),
  data: Ember.computed('i18n.locale', {
    get() {
      let data = {};
      const locale = this.get('i18n.locale');

      if (locale) {
        data['lang'] = locale;
      }

      return data;
    }
  }),
  _getFullDataHash(data) {
    const classData = Ember.get(this, 'data') || {};
    const _data = Ember.merge({}, classData);
    return Ember.merge(_data, data);
  },
  request(url, options = {}) {
    options.data = this._getFullDataHash(options.data);
    return this._super(url, options);
  }
});