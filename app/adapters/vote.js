import Ember from 'ember';
import applicationAdapter from '../application/adapter';

export default applicationAdapter.extend({
  namespace: 'features',
  pathForType: function (modelName) {
    return Ember.String.decamelize(modelName);
  },
  ajaxOptions: function (url, type, options) {
    // get the default RESTAdapter 'ajaxOptions'
    var hash = this._super(url, type, options);

    // override if it's a PUT request
    if (type === 'PUT') {
      hash.dataType = 'text';
    }
    return hash;
  },
  ajaxSuccess: function (jqXHR, data) {
    if (typeof data === 'string') {
      // return an empty object so the Serializer
      // handles it correctly
      return {};
    } else {
      return data;
    }
  }
});
