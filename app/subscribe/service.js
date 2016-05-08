import Ember from 'ember';
import {isAjaxError, isNotFoundError, isForbiddenError, isSuccess} from 'ember-ajax/errors';

export default Ember.Service.extend({
  ajax: Ember.inject.service(),
  flashMessages: Ember.inject.service(),
  request(email) {
    const flashMessages = this.get('flashMessages');

    return this.get('ajax').post('/subscribe/mailchimp//', { // two "//" are workaround for removing trailing slash by ember ajax
        dataType: 'text',
        data: {
          email: email
        },
      });
  }
});
