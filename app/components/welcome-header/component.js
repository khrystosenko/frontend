import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'header',
  classNames: 'mdl-layout__header',
  i18n: Ember.inject.service(),
  locales: Ember.computed('i18n.locale', 'i18n.locales', function() {
    const i18n = this.get('i18n');
    const currentLocale = this.get('i18n.locale');

    return this.get('i18n.locales').map(function (loc) {
      return { id: loc, text: i18n.t('language-select.language.' + loc), isActive: loc === currentLocale };
    });
  })
});
