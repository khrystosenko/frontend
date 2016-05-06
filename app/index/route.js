import Ember from 'ember';

export default Ember.Route.extend({
  flashMessages: Ember.inject.service(),
  ajax: Ember.inject.service(),
  actions: {
    subscribe(email) {
      const flashMessages = Ember.get(this, 'flashMessages');

      return this.get('ajax').request('/subscribe/mailchimp/', {
        method: 'POST',
        data: {
          email: email
        }
      })
        .then(function( msg ) {
          flashMessages.success(`Email ${email} subscribed successfully!`);
          return res
        })
        .catch(flashMessages.danger('Sorry, something went wrong!'));
    }
  }
});
