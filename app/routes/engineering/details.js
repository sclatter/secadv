import Ember from 'ember';

export default Ember.Route.extend({
	model: function(params) {
      var parentRoutesModel = this.modelFor('engineering');
      return parentRoutesModel[params.itemId];
  	}
});
