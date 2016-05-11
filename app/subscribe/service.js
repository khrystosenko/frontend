import Ember from 'ember';

export default Ember.Service.extend({
  ajax: Ember.inject.service(),
  request(email) {

    return this.get('ajax').post('/subscribe/mailchimp//', { // two "//" are workaround for removing trailing slash by ember ajax
        dataType: 'text',
        data: {
          email: email
        },
      });
  }
});
