import Ember from 'ember';

export default Ember.Route.extend({
	model: function(params) {
    return [
      {
        trip: "Todos Santos, Mexico - March 2016",
        url: "https://www.flickr.com/photos/27108151@N03/albums/72157665667798450",
        description: "A long weekend in a fun, artsy surfing town"
      },
      {
        trip: "Alps, Balkans and Oktoberfest - September 2015",
        url: "http://girodichatterbox.blogspot.com/2015/11/alps-balkans-and-oktoberfest-2015.html",
        description: "Trekking and cultural touring around the former Yugoslavia."
      },
      {
        trip: "Bhutan, Cambodia & Thailand - Winter 2014",
        url: "http://girodichatterbox.blogspot.com/2015/01/bhutan-cambodia-and-thailand-december.html",
        description: "Trekking, cycling and cultural touring. My first trip to Asia."
      },
      {
        trip: "Ireland, Spring 2014",
        url: "http://girodichatterbox.blogspot.com/2014/06/irelands-wiclow-way-may-2014.html",
        description: "Dublin city + Trekking the Wicklow Way."
      },
      {
        trip: "Santa Fe, Fall 2013",
        url: "http://girodichatterbox.blogspot.com/2013/10/exploring-new-places-with-girlfriends.html",
        description: "Hiking and cultural touring with my girl friends."
      },
      {
        trip: "Glacier and Tetons, Summer 2013",
        url: "http://www.flickr.com/photos/28539052@N03/sets/72157634480230751/",
        description: "Very long day hikes in the mountains."
      },
      {
        trip: "Peru, Fall 2012",
        url: "http://www.secadvertising.com/peru2012",
        description: "Lima and Arequipa cities + Colca Canyon + Andes trek + Macchu Picchu."
      },
      {
        trip: "Mexico, Riviera Maya Spring 2012",
        url: "http://www.secadvertising.com/mexico2012",
        description: "Snorkeling and archeological touring."
      },
      {
        trip: "Vermont and Quebec, Fall 2011",
        url: "http://www.secadvertising.com/vermont2011",
        description: "Cycle tour and hiking in Vermont. Side trip to Montreal."
      },
      {
        trip: "North Italy, Summer 2011",
        url: "http://www.secadvertising.com/italy2011",
        description: "Trekking across the Dolomites. Side trip to Verona + Venice."
      },
      {
        trip: "Germany, Switzerland and France, Spring 2010",
        url: "http://girodichatterbox.blogspot.com/p/sarahs-swartzwald-world-germany.html",
        description: "Cycling tour of the Rhine region + Black Forest."
      },
      {
        trip: "Olympic Peninsula, Fall 2009",
        url: "http://www.secadvertising.com/washington_2009/",
        description: "Circumnavigating the Olympic Peninsula by bicycle with my parents."
      },
      {
        trip: "Hawaii, Fall 2008",
        url: "http://www.secadvertising.com/hawaii_2008/",
        description: "Snorkeling and touring the big island."
      },
      {
        trip: "Canadian Rockies, Summer 2007",
        url: "http://www.secadvertising.com/canada_07/",
        description: "A beautiful hiking vacation to break from cycling season."
      },
      {
        trip: "Oregon and Eastern Sierra, Summer & Fall 2006",
        url: "http://www.secadvertising.com/summer_06/",
        description: "Some fun cycling adventures from Summer 2006."
      },
      {
        trip: "France & Spain, Summer 2005",
        url: "http://www.secadvertising.com/France-Spain2005/",
        description: "A lovely vacation cycling through the Pyrenees."
      },
      {
        trip: "Yosemite, Spring 2005",
        url: "http://www.secadvertising.com/yosemite_2005/",
        description: "Hiking in the early Spring...aaah."
      },
      {
        trip: "Northern Italy, Summer 2004",
        url: "http://www.secadvertising.com/Italy2004/",
        description: "Epic cycling adventure through the Alps, Dolomites and Lake Country."
      },
      {
        trip: "California Coast, Fall 2003",
        url: "http://www.secadvertising.com/santa_barbara/",
        description: "Cycling Highway 1 from the Bay Area to Santa Barbara."
      },
      {
        trip: "Costa Rica, Winter 2003",
        url: "http://www.secadvertising.com/costa_rica/",
        description: "A Latin America Christmas break with my best friend."
      },
      {
        trip: "Italy, Fall 2002",
        url: "http://www.secadvertising.com/costa_rica/",
        description: "Tuscany & Umbria cycling tour + art and culture touring."
      }
    ];
  }
});
