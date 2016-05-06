import JSONAPIAdapter from 'ember-data/adapters/json-api';

export default JSONAPIAdapter.extend({
  namespace: '',
  host: 'http://api.roomit.tv'
});
