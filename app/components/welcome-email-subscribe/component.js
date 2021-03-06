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
  i18n: Ember.inject.service(),
  email: '',
  isDisabled: false,
  submittedSuccessfully: false,
  customErrorMessage: Ember.computed('i18n.locale', 'validations.isInvalid', 'form.email.errorMessage', function() {
    return this.get('validations.isInvalid') ? this.get('i18n').t('form.email.errorMessage') : '';
  }),
  actions: {
    submit(email) {
      const isInvalid = this.get('validations.isInvalid');
      const $textfield = this.$('.mdl-textfield');

      this.set('submittedSuccessfully', false);

      if (isInvalid) {
        $textfield.addClass('is-invalid');

        return false;
      }

      this.set('isDisabled', true);

      this.get('subscribe')(email).then(() =>  {
        this.set('email', null);
        this.set('submittedSuccessfully', true);
        $textfield.removeClass('is-dirty is-focused');
        this.$('.mdl-textfield__input').blur();
      })
      .catch(() => {
        $textfield.addClass('is-invalid');
      })
      .finally(() => this.set('isDisabled', false));
    }
  }
});
