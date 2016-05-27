import Ember from 'ember';

export function initialize(applicationInstance) {
  const i18nService = applicationInstance.lookup('service:i18n');
  const currentLocaleService = applicationInstance.lookup('service:currentLocale');
  const storedLocale = currentLocaleService.getLocale();
  const locales = i18nService.get('locales');
  const defaultLocale = 'en';

  i18nService.set('locale', locales.includes(storedLocale) && storedLocale || defaultLocale);

  Ember.addObserver(i18nService, 'locale', function () {
    currentLocaleService.setLocale(i18nService.get('locale'));
  });
}

export default {
  name: 'i18n',
  initialize
};
