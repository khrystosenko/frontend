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
  voteRecord: '',
  email: '',
  isSubscribeHidden: false,
  isDisabled: false,
  submittedSuccessfully: false,
  customErrorMessage: Ember.computed('i18n.locale', 'validations.isInvalid', 'form.email.errorMessage', function() {
    return this.get('validations.isInvalid') ? this.get('i18n').t('form.email.errorMessage') : '';
  }),
  init() {
    this._super(...arguments);
    this.isSubscribeHidden = !!this.get('voteRecord.email');
  },
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

      this.get('subscribe')(email)
        .then(() => {
          this.set('email', null);
          this.set('submittedSuccessfully', true);
          $textfield.removeClass('is-dirty is-focused');
          this.$('.mdl-textfield__input').blur();
          Ember.run.later(() => {
            this.set('isSubscribeHidden', true);
            this.sendAction('closeModal');
          }, 1000);
        })
        .catch(() => {
          $textfield.addClass('is-invalid');
        })
        .finally(() => this.set('isDisabled', false));
    }
  }
});
