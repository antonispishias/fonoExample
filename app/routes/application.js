import Ember from 'ember';

export default Ember.Route.extend({
  beforeModel() {
      this.transitionTo('devices');
  },
  actions : {
    search(device) {
      this.transitionTo('devices.device', device);
    }
  }
});
