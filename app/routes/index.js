import Ember from 'ember';

export default Ember.Route.extend({
	actions: {
		didTransition: function() {
			console.log('trasitioned!');
			return true;
		}
	}
});
