import Ember from 'ember';
import UnauthenticatedRouteMixin from 'ember-simple-auth/mixins/unauthenticated-route-mixin';

export default Ember.Route.extend(UnauthenticatedRouteMixin, {
  ajax: Ember.inject.service(),
  subscribe: Ember.inject.service(),
  i18n: Ember.inject.service(),
  model() {
    return this.get('ajax').request('/features//')
      .then(function (res) {
        return res.reduce(function (items, item) {

          switch (item.type) {
          case 0: // benefits
            items.benefits.push(item);
            break;
          case 1: // battle
            items.battle.push(item);
            break;
          default:
            break;
          }

          return items;
        }, {
          benefits: [], battle: [] });
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
