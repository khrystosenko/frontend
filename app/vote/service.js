import Ember from 'ember';
import { storageFor } from 'ember-local-storage';

export default Ember.Service.extend({
  ajax: Ember.inject.service(),
  subscribeStorage: storageFor('subscribe'),
  getEmail() {
    return this.get('subscribeStorage.email');
  },
  request(voteId, email) {

    return this.get('ajax').post('/feature/vote//', { // two "//" are workaround for removing trailing slash by ember ajax
      dataType: 'text',
      data: {
        email: email
      },
    })
      .then(() => {
        this.set('subscribeStorage.id', voteId);
        if (email) {
          this.set('subscribeStorage.email', email);
        }
      });
  },
  subscribe(email) {
    const voteId = this.get('subscribeStorage.id');

    return this.get('ajax').put(`/feature/vote/${voteId}//`, { // two "//" are workaround for removing trailing slash by ember ajax
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
