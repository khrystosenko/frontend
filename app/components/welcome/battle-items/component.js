import Ember from 'ember';

export default Ember.Component.extend({
  features: [],
  votedFeatureId: null,
  hasNotVoted: Ember.computed('votedFeatureId', function () {
    return !this.get('votedFeatureId');
  }),
  isShowingModal: false,
  actions: {
    featureClicked(id) {
      this.get('vote')(id)
        .then(() => {
          this.set('votedFeatureId', id);
        });
    },
    toggleModal: function() {
      this.toggleProperty('isShowingModal');
    }
  }
});
