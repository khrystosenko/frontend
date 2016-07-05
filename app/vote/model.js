import Model from 'ember-data/model';
import attr from 'ember-data/attr';
import {
  validator, buildValidations
}
from 'ember-cp-validations';

const Validations = buildValidations({
  feature: [
    validator('presence', true),
    validator('number')
  ],
  email: [
    validator('format', { type: 'email' })
  ]
});

export default Model.extend(Validations, {
  url: 'vote',
  'feature': attr('number'),
  'email': attr(),
  subscribe(email) {
    this.set('email', email);
    console.log('subscribed', email, this.get('email'));
    return this.save();
  }
});
