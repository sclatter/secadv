import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    buttonClicked: function() {
   	  this.sendAction('action', this.get('param'));
    }
  }
});
