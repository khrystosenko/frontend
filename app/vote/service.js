import Ember from 'ember';
import { storageFor } from 'ember-local-storage';

export default Ember.Service.extend({
  ajax: Ember.inject.service(),
  voteStorage: storageFor('vote'),
  getVoteId() {
    return this.get('voteStorage.vote.id');
  },
  getEmail() {
    return this.get('voteStorage.vote.email');
  },
  getData() {
    return this.get('voteStorage.vote');
  },
  save(data) {
    return this.set('voteStorage.vote', data);
  }
});
