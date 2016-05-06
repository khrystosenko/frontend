import Ember from 'ember';

export default Ember.Component.extend({
  email: '',
  hasNoEmail: Ember.computed('email', function() { return !this.get('email'); }),
  actions: {
    submit(mail) {
      this.get('someAction')(mail)
      .then(() => this.set('email', ''));
    }
  }
});
