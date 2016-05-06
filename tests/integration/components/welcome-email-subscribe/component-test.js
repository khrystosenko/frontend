import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('welcome-email-subscribe', 'Integration | Component | welcome email subscribe', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{welcome-email-subscribe}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#welcome-email-subscribe}}
      template block text
    {{/welcome-email-subscribe}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
