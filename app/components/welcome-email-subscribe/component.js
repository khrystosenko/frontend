import Ember from 'ember';
import { validator, buildValidations } from 'ember-cp-validations';

const Validations = buildValidations({
  'email': {
    description: 'Email',
    validators: [
      validator('presence', true),
      validator('format', { type: 'email' })
    ]
  }
});

export default Ember.Component.extend(Validations, {
  flashMessages: Ember.inject.service(),
  email: '',
  isDisabled: false,
  submittedSuccessfully: false,
  errorMessages: Ember.computed('validations.messages', function() {
    return this.get('validations.messages');
  }),
  actions: {
    submit(email) {
      const flashMessages = this.get('flashMessages');
      const isInvalid = this.get('validations.isInvalid');

      if (isInvalid) {
        this.set('hasSubmitFailed', true);
        this.set('submittedSuccessfully', false);

        return false;
      }

      this.set('isDisabled', true);

      this.get('someAction')(email).then(() =>  {
        this.set('email', null);
        this.set('isDisabled', false);
        this.set('submittedSuccessfully', true);
        this.set('hasSubmitFailed', false);
      })
      .catch((err) => {
        flashMessages.clearMessages();
        flashMessages.danger('Sorry, something went wrong!')
        this.set('isDisabled', false);
        this.set('submittedSuccessfully', false);
        this.set('hasSubmitFailed', true);
      });
    }
  }
});
