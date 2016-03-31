import Ember from 'ember';

export default Ember.Route.extend({
	model: function(params) {
    return [
      {
        title: "LinkedIn",
        description: "LinkedIn Publishing Platform - writing about my professional journey.",
        url: "https://www.linkedin.com/today/author/2996039"
      },
      {
        title: "EnableHer",
        description: "I wrote a series of posts for this e-zine a few years back.",
        url: "http://www.enableher.com/author/sclatterbuck"
      },
      {
        title: "Musings of a Cycling-Crazed Techie",
        description: "This is my personal blog where I sometimes write about technology, but mostly about adventures.",
        url: "http://girodichatterbox.blogspot.com/"
      },
      {
        title: "LinkedIn Engineering Blog",
        description: "I write about technology and engineering culture from time to time.",
        url: "https://engineering.linkedin.com/blog/search?q=Sarah+Clatterbuck"
      }
    ];
  }
});
