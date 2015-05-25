import Ember from 'ember';

export default Ember.Component.extend({
	didInsertElement: function() {
		if(this.isVisible) {
			$(this.element).find('h2').attr('tabindex', '-1').focus();
		}
	}
});
