import Ember from 'ember';
import { storageFor } from 'ember-local-storage';

export default Ember.Service.extend({
  ajax: Ember.inject.service(),
  subscribeStorage: storageFor('subscribe'),
  getEmail() {
    return this.get('subscribeStorage.email');
  },
  request(email) {

    return this.get('ajax').post('/subscribe/mailchimp//', { // two "//" are workaround for removing trailing slash by ember ajax
      dataType: 'text',
      data: {
        email: email
      },
    })
      .then(() => {
        this.set('subscribeStorage.email', email);
      });
  }
});
