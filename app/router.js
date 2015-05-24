import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

export default Router.map(function() {
  this.route('speaking');
  this.route('writing');
  this.route('press');
  this.route('engineering', function() {
  	this.route('details', {path: ':itemId'});
  });
  this.route('design', function() {
    this.route('details', {path: ':itemId'});
  });
  this.route('adventures');
});
