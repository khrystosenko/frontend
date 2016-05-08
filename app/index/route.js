import Ember from 'ember';

export default Ember.Route.extend({
  subscribe: Ember.inject.service(),
  actions: {
    subscribe(email) {
      return this.get('subscribe').request(email);
    }
  }
});
