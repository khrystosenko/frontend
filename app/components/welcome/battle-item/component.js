import Ember from 'ember';

export default Ember.Component.extend({
  classNameBindings: ['isSelected', 'isHoverable'],
  isSelected: false,
  isHoverable: true,
  feature: { id: null, title: '', description: '', image_url: '' },
  click() {
    if (this.isHoverable) {
      this.sendAction('action', this.get('feature.id'));
    }
  }
});
