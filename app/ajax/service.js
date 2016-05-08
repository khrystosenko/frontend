import AjaxService from 'ember-ajax/services/ajax';
import config from 'roomit-frontend/config/environment';

export default AjaxService.extend({
  namespace: config.APP.API_NAMESPACE,
  host: config.APP.API_HOST,
});