import Ember from 'ember';

export default Ember.Component.extend({
  features: [],
  votedId: null,
  hasNotVoted: Ember.computed('votedId', function () {
    return !this.get('votedId');
  }),
  isShowingModal: false,
  actions: {
    featureClicked(id) {
      console.log('zzzz', id);
      this.get('vote')(id)
        .then(() => {
          this.set('votedId', id);
          // this.toggleProperty('isShowingModal');
        });
    },
    toggleModal: function() {
      this.toggleProperty('isShowingModal');
    }
  }
});
