import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    focusSection: function() {
      var section = $('#dialog-header');
      if (section) {
        section.attr({'tabindex': '-1', 'contenteditable': 'false'}).focus();
      }
    }
  },
	model: function(params) {
    return [
      {
        project: "iOS Onboarding Flow",
        itemId: 0,
        description: "As an apprentice on our mobile team, I enhanced the onboarding flow with additonal actions as well as adding accessibility throughout. The work was done entirely in Objective C following my attendance of the Big Nerd Ranch iOS Bootcamp.",
        organization: "LinkedIn",
        links: [],
        images: [{"url": "../images/onboarding.png", "description": "screen shot of onboarding flow"}]
      },
      {
        project: "Slider Javascript Library",
        itemId: 1,
        description: "I built a Slider base javascript library, TickedSlider child, DoubleSlider which contained two Sliders and managed behavior. The libraries allow developers to configure sliders with range selectors or discrete value selectors.",
        organization: "LinkedIn",
        links: [],
        images: [{"url": "../images/slider.png", "description": "screen shot of slider widget"}]
      },
      {
        project: "Toggle Javascript Library",
        itemId: 2,
        description: "I built a native-style mobile toggle switch library in Javascript as well as three decorators to enhance behaviors. These switches were stylistic progressive enhancements to checkboxes under the hood.",
        organization: "LinkedIn",
        links: [],
        images: [{"url": "../images/toggle.png", "description": "screen shot of toggle widget"}]
      },
      {
        project: "Bowman Library Research Skills Tutorial ",
        itemId: 3,
        description: "Responsive, progressively enhanced, Single Page App built without an MVC using Javascript + YUI3, HTML5, CSS3. Some accessibility enhancements have been added. The tutorial will work without Javascript enabled.",
        organization: "Menlo College",
        links: [{"description": "Tutorial", "url": "http://www.menlo.edu/library/research/tutorial/"}, {"description": "Code", "url": "https://github.com/sclatter/MenloCollegeTutorial2012"}],
        images: [{"url": "../images/tutorial.png", "description": "screen shot of tutorial"}]
      },
      {
        project: "DustJS Open Source Contribution",
        itemId: 4,
        description: "Contributing to DustJS open source library for client-side page rendering. Most used contribution is a Math helper. The Math helper has been further enhanced by several other developers following the initial contribution.",
        organization: "LinkedIn",
        links: [{"description": "Code", "url": "https://github.com/sclatter/dustjs"}],
        images: [{"url": "../images/dust.png", "description": "screen shot of Github page"}]
      },
      {
        project: "Discovery Module",
        itemId: 5,
        description: "Javascript library and pattern design for a Discovery widget to be used on the home page, profile, and premium user experiences. The module allows for seamless browsing and discovery of entities from Restful APIs.",
        organization: "LinkedIn",
        images: [{"url": "../images/discovery.png", "description": "screen shot of Discovery module"}]
      },
      {
        project: "Universal Header Project",
        itemId: 6,
        description: "A distributed cache platform with client libraries for Node.js, C++ and PHP that allow ~1ms lookup of global navigation user experience in 30K+ permutations supporting 200+ Yahoo! brands and 35+ languages.",
        organization: "Yahoo!",
        links: [{"description": "Demo", "url": "header.html"}],
        images: [{"url": "../images/header.png", "description": "screen shot of rendered Universal Header"}]
      },
      {
        project: "Breaking News Widget",
        itemId: 7,
        description: "Using a central cache with an expirable javascript API, we created a real-time polling system on top of the Universal Header Javascript to dynamically inject the widget docked to the right side of the browser whenever breaking news events occur.",
        organization: "Yahoo!",
        images: [{"url": "../images/breaking_news.png", "description": "screen shot of breaking news widget running"}]
      },
      {
        project: "Yahoo! 9/11, 10-year anniversary Digital Moment of Silence",
        itemId: 8,
        description: "On September 11, 2011, we used our platform to deliver a front-end experience for a 1 minute digital moment of silence on all Yahoo! U.S. web sites from 8:46 a.m. ET to 8:47 a.m. ET.",
        organization: "Yahoo!",
        links: [{"description": "Demo", "url": "dmos.html"}],
        images: [{"url": "../images/dmos.png", "description": "screen shot of moment of silence"}]
      },
      {
        project: "Universal Sharing Widget",
        itemId: 9,
        description: "My team created a new horizontal widget for a cross-network, consistent content sharing experience. I later led an effort for a v2 experience that allowed quicker access to popular social networks and more skinning options. The widget included a server-side package with configuration options and was fully secure, accessible and localized.",
        organization: "Yahoo!",
        links: [{"description": "Demo", "url": "sharing.html"}],
        images: [{"url": "../images/sharing.png", "description": "screen shot of widget v1"}]
      },
      {
        project: "Add to Yahoo! Button for Yahoo Developer Network",
        itemId: 10,
        description: "In 2010, I built a lightweight Javascript libray for the Yahoo! Developer Network. The library exists for publishers and developers to promote the apps and content on yahoo.com and my.yahoo.com.",
        organization: "Yahoo!",
        links: [{"description": "Demo", "url": "addtoyahoo.html"}]
      }
    ];
  }
});
