import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    close: function() {
      console.log('closed!');
    },
  }
  /*becomeFocused: function() {
  	var section = this.$('#detail-view');
    section.attr('tabindex', -1).focus();
  }.on('didInsertElement')*/
});
