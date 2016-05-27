import Ember from 'ember';
import UnauthenticatedRouteMixin from 'ember-simple-auth/mixins/unauthenticated-route-mixin';

export default Ember.Route.extend(UnauthenticatedRouteMixin, {
  ajax: Ember.inject.service(),
  subscribe: Ember.inject.service(),
  i18n: Ember.inject.service(),
  model() {
    return Ember.RSVP.hash({
      features: this.get('ajax').request('/features/')
    });
  },
  actions: {
    subscribe(email) {
      return this.get('subscribe').request(email);
    },
    setLocale(locale) {
      this.set('i18n.locale', locale);
      this.refresh();
    }
  }
});
