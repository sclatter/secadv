import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    focusTrigger: function(itemId) {
      if(itemId) {
        var trigger = $('main ul dd a')[itemId], 
          header = $('main h2');
        if(trigger) {
          trigger.focus();	
        } else {
          header.attr('tabindex', -1).focus();
        }
        
      }
      this.transitionToRoute('engineering');
    }
  }
});
