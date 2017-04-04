import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    focusTrigger: function(itemId) {
      var trigger = $('main ul dd a').eq(itemId),
          header = $('main h2');
        if(trigger) {
          trigger.focus();
        } else {
          header.attr({'tabindex': '-1', 'contenteditable': 'false'}).focus();
        }
      this.transitionToRoute('engineering');
    }
  },
  //queryParams: ['mode'],
  //mode: 'page'
});
