import Ember from 'ember';

export default Ember.Route.extend({

	model: function(params) {
    return [
      {
        name: "Building and Testing Accessible Mobile Applications - Panel",
        venue: "Grace Hopper Celebration of Women in Computing 2015",
        description: "Through the Partner Collaboration Forum, I assembled this panel and wrote the paper for the technical topic.",
        url: "http://schedule.gracehopper.org/session/building-and-testing-accessible-mobile-applications/"
      },
      {
        name: "Gross Technical Career Happiness - Tech Talk",
        venue: "Yelp Speaker Series"
      },
      {
        name: "Gross Technical Career Happiness - Keynote",
        venue: "Defi Technovation/Technovation Challenge Kickoff Montreal",
        description: "Through a partnership with the Montreal Chamber of Commerce, The U.S. Consolate in Montreal, and the Montreal startup community, I was invited to speak at the innagural Girls Make Apps event and gathering of the Montreal tech community.",
        url: "https://www.facebook.com/defitechnovationchallenge",
        image: "https://scontent-sjc.xx.fbcdn.net/hphotos-xpf1/v/t1.0-9/11041080_655203761274708_7544757182242307361_n.jpg?oh=361fa450cab883f7dd5b9489571ce88c&oe=55D56F30"
      },
      {
        name: "Developing Intuitive, Consistent UX Patterns Across Platforms",
        venue: "Mobile+Web Devcon, San Francisco",
        description: "I was invited to speak on a topic around design for developers. The talk focused around consistent usability of widgets across web and native mobile platforms.",
        url: "http://mobilewebdevconference.com/san-francisco-2015/agenda/day-three/1145am.html",
        image: "http://mobilewebdevconference.com/assets/images/mwd-header-frisco15.png"
      },
      {
        name: "Achieving Leverage for Accessibility in a Large Organization",
        venue: "Anita Borg Institute - Grace Hopper Celebration of Women in Computing 2014",
        description: "Most technology organizations do not consider the accessibility of their products until they emerge from the startup phase as a category leader with a large and diverse audience. At that time, significant barriers exist to gaining momentum for accessibility efforts. I will discuss my experience at LinkedIn achieving leverage for accessibility efforts through a small, interdisciplinary task force, including methods employed by the task force to achieve objectives. ",
        url: "http://gracehopper.org/2014-schedule/?subject=show_details&_year=2014&sid=2051#2051",
        image: "http://anitaborg.org/wp-content/themes/abi/library/images/header-logo.png"
      },
      {
        name: "Plenary Session: The M-Enabling 2014 Talk Show (Part 2) Media and Web Search Accessibility: The Mobile Quantum Leap",
        venue: "M-Enabling Summit Conference & Showcase 2014",
        description: "As a member of the plenary/keynote panel, I spoke about LinkedIn's efforts in mobile accessibility.",
        url: "http://g3ict.org/events/schedule/event_agenda/p/eventId_467/id_agenda",
        image: "http://g3ict.org/design/js/tinymce/filemanager/userfiles/Image/template/m-enabling-logo-2014.jpg"
      },
      {
        name: "Case Study on Improving accessibility without compromising user experience",
        venue: "Annual International Technology & Persons with Disabilities Conference 2014",
        description: "Walk through of a case study where efforts to improve accessibility impacted interaction design and how the team worked together to come a universal solution",
        url: "http://www.csun.edu/cod/conference/2014/sessions/index.php/public/presentations/view/99",
        image: "http://www.csun.edu/cod/conference/2014/sessions/app/webroot/img/logo_standard.png"
      },
      {
        name: "A Pattern Library as a Foundational Sketch for Web Accessibility Efforts",
        venue: "Annual International Technology & Persons with Disabilities Conference 2014",
        description: "At LinkedIn, the DaVinci UI Pattern library demonstrates accessible web patterns that designers and developers can combine into a work of art.",
        url: "http://www.csun.edu/cod/conference/2014/sessions/index.php/public/presentations/view/162",
        image: "http://www.csun.edu/cod/conference/2014/sessions/app/webroot/img/logo_standard.png"
      },
      {
        name: "Stealth Accessibility",
        venue: "Front-End Meetup, LinkedIn Tech Talks",
        description: "I am the WebDev in charge of LinkedIn's montetization products, and also the fearless leader of the LinkedIn Web Accessibility Task Force. In this talk I discuss how my team promotes awareness of web accessibility and organizes the execution of improving LinkedIn's accessibility for all users.",
        url: "https://www.youtube.com/watch?v=vNCG0Yh3lYo",
        image: "data:image/jpeg;base64,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"
      }
    ];
  }
});
