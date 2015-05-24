import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    focusSection: function() {
      var section = $('#detail-view'); 
      if (section) {
        section.attr('tabindex', -1).focus();
      }
    }
  },
  model: function(params) {
  	return [
      {
        project: "Monetizin T-Shirt, 2014",
        itemId: 0,
        description: "I designed this t-shirt as a holiday gift for the web developers on Team Money at LinkedIn. The concept was to include symbols for various currencies in the word, along with the LinkedIn logo mark.",
        organization: "LinkedIn", 
        links: [],
        images: [{"url": "../images/monetizin_t.png", "description": "photo of t-shirt"}]
      },
      {
        project: "Inclusive T-Shirt, 2014",
        itemId: 1,
        description: "I designed this t-shirt as a gift for all the Accessibility Task Force members at LinkedIn. The concept was to represent that our team was intended to make our products inclusive for people with various disabilities and to have a fun play on accommodations used for people with the disabilities we reach. The sign language is for the letters 'in' and the Braille is for the letters 'clusive'.",
        organization: "LinkedIn", 
        links: [],
        images: [{"url": "../images/inclusive_t.png", "description": "photo of t-shirt"}]
      },
  	  {
        project: "Bowman Library Research Skills Tutorial, 2012",
        itemId: 2,
        description: "I played the role of designer+developer on this single page responsive tutorial built for college students to learn research skill. We targeted a responsive approach because most of the students at the university use mobile as their primary platform.",
        organization: "Menlo College", 
        links: [{"description": "Designs Round 1", "url": "Designs_Round1.pdf"},{"description": "Design Revisions", "url": "Designs_Round2.pdf"},{"description": "Design Final Revisions", "url": "Designs_Round3.pdf"},{"description": "Tutorial", "url": "http://www.menlo.edu/library/research/tutorial/"}, {"description": "Code", "url": "https://github.com/sclatter/MenloCollegeTutorial2012"}],
        images: [{"url": "../images/tutorial.png", "description": "screen shot of tutorial"}]
      },
      {
        project: "Bowman Library Web Site, 2009",
        itemId: 3,
        description: "After extensive user research, I created a new Information Architecture for the web site. Following the creation of the new IA, I created visual design concepts and finally implemented the new design across the entire site.",
        organization: "Menlo College", 
        links: [{"description": "Bowman Library Web Site", "url": "http://www.menlo.edu/library/"}],
        images: [{"url": "../images/bowman.png", "description": "screen shot of the site"}]
      }
  	];
  }
});
