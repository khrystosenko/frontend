import Ember from 'ember';
import ApplicationRouteMixin from 'ember-simple-auth/mixins/application-route-mixin';

export default Ember.Route.extend(ApplicationRouteMixin, {
  i18n: Ember.inject.service(),
  title: 'Roomit.tv',
  afterModel: function () {
    const storedLocale = this.get('session').set('data.locale');

    if (storedLocale) {
      this.set('i18n.locale', storedLocale);
    }
  }
});
