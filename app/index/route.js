import Ember from 'ember';
import UnauthenticatedRouteMixin from 'ember-simple-auth/mixins/unauthenticated-route-mixin';

export default Ember.Route.extend(UnauthenticatedRouteMixin, {
  ajax: Ember.inject.service(),
  subscribe: Ember.inject.service(),
  vote: Ember.inject.service(),
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
      })
      .then((model) => {
        const storedVote = this.get('vote').getData() || null;

        model.vote = storedVote && storedVote.id ?
          this.store.push(this.store.normalize('vote', storedVote)) :
          null;

        return model;
      });
  },
  actions: {
    subscribe(email) {
      return this.get('subscribe').request(email);
    },
    vote(featureId, email) {
      const voteRecord = this.store.createRecord('vote', {
        feature: featureId,
        email: email || this.get('subscribe').getEmail() || undefined
      });

      return voteRecord.save()
        .then(() => {
          this.set('model.vote', voteRecord);
          this.get('vote').save(voteRecord.serialize({ includeId: true }));
          this.controller.toggleProperty('isShowingModal');
        });
    },
    voteSubscribe(email) {
      const voteModel = this.get('model.vote');
      voteModel.set('email', email);

      return voteModel.save()
        .then(() => {
          this.get('vote').save(voteModel.serialize({ includeId: true }));
        });
    },
    toggleModal() {
      this.controller.toggleProperty('isShowingModal');
    }
  }
});
