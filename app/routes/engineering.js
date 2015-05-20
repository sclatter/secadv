import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    focusSection: function() {
      var section = $('#detail-view'); 
      if (section) {
        section.attr('tabindex', -1).focus();
      }
    }, 
    didTransition: function() {
      console.log('trasitioned!');
      return true;
    }
  },
	model: function(params) {
    return [
      {
        project: "iOS Onboarding Flow",
        itemId: 0,
        description: "As an apprentice on our mobile team, I enhanced the onboarding flow with additonal actions as well as adding accessibility throughout.",
        organization: "LinkedIn", 
        images: []
      }, 
      {
        project: "Slider Javascript Library",
        itemId: 1,
        description: "I built a Slider base javascript library, TickedSlider child, DoubleSlider which contained two Sliders and managed behavior.",
        organization: "LinkedIn", 
        images: []
      }, 
      {
        project: "Toggle Javascript Library",
        itemId: 2,
        description: "I built a native-style mobile toggle switch library in Javascript as well as three decorators to enhance behaviors.",
        organization: "LinkedIn", 
        images: []
      }
    ];
  }
});
