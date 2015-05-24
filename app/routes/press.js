import Ember from 'ember';

export default Ember.Route.extend({

	model: function(params) {
    return [
      {
        name: "Women in Business Q&A: Sarah Clatterbuck, Director, Web Development, LinkedIn Corporation", 
        publication: "Huffington Post Business", 
        reporter: "Laura Dunn",
        url: "http://www.huffingtonpost.com/laura-dunn/women-in-business-qa-sara_b_7430278.html",
        image: "http://s.huffpost.com/images/v/logos/bpage/business.gif"
      },
      {
        name: "Seminar encourages Montreal girls to create their own apps", 
        publication: "CTV News", 
        reporter: "Kevin Gallagher",
        url: "http://montreal.ctvnews.ca/video?clipId=570502&playlistId=1.2280233&binId=1.1332485&playlistPageNum=1",
        image: "http://montreal.ctvnews.ca/polopoly_fs/1.1996568.1410187282!/httpImage/image.jpg_gen/derivatives/landscape_800/image.jpg"
      },
      {
        name: "Le Défi Technovation: la technologie, entre filles!", 
        publication: "Le Huffington Post Québec", 
        reporter: "Maxellende Pycke",
        url: "http://quebec.huffingtonpost.ca/2015/03/17/defi-technovation-montreal-technologie-filles-video-photos_n_6871498.html",
        image: "http://jerz.setonhill.edu/wp-content/uploads/2013/12/image6.jpg"
      },
      {
        name: "Celebrating Women In Tech", 
        publication: "Tech News Today", 
        reporter: "John Dewey",
        url: "http://www.technewstoday.com/21919-celebrating-women-in-tech/",
        image: "http://www.technewstoday.com/img/logo/logo.png"
      },
      {
        name: "Sarah Clatterbuck - Grace Hopper Celebration of Women in Computing (2014) - theCUBE", 
        publication: "SiliconAngle TV", 
        reporter: "Jeff Frick",
        url: "https://www.youtube.com/watch?v=_63JHK4GKCU",
        image: "http://www.siliconangle.tv/wp-content/uploads/2014/01/theCUBE_Logo.jpg"
      },
      {
        name: "10 Most Powerful Women Shining In The Tech World!", 
        publication: "EFY Times News", 
        reporter: "Sanchari Banerjee",
        url: "http://efytimes.com/e1/fullnews.asp?edid=150753",
        image: "http://www.artechinfo.in/BanasthaliOnline/EFYTimes_files/efytimes_logo.gif"
      },
      {
        name: "22 Of The Most Powerful Women Engineers In The World", 
        publication: "Business Insider", 
        reporter: "Julie Bort",
        url: "http://www.businessinsider.com/22-powerful-women-engineers-in-tech-2014-7#no-22-linkedin-sarah-clatterbuck-1",
        image: "data:image/png;base64,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"
      }, 
      {
        name: "Facebook Women's Hackathon Honors I School Students", 
        publication: "UC Berkeley School of Information", 
        reporter: "Arezu Aghaseyedjavadi, Ruchita Rathi, Ankita Bhosle, and Sufia Siddiqui",
        url: "http://www.ischool.berkeley.edu/newsandevents/news/20140410facebookhackathon",
        image: "http://www.ischool.berkeley.edu/sites/all/themes/ischool2008/ischool2008/images/logo_home.jpg"
      }, 
      {
        name: "When Litter and Graffiti Overtook Their Neighborhood, These Teens Invented an App", 
        publication: "Nation Swell", 
        reporter: "Ricardo Hernandez",
        url: "http://nationswell.com/teens-app-tag-it-cleaner-neighborhood/",
        image: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcTd-zYTiyr-ZfLszZmLEuPor1Nci6MRMIQ4A3aUrfLwhQcgKwCTJRZ7ckq8"
      },
      {
        name: "December 2013 Site of the Month", 
        publication: "American Library Association", 
        reporter: "Rebecca Maniates, Yale-NUS College",
        url: "http://www.ala.org/acrl/aboutacrl/directoryofleadership/sections/is/iswebsite/projpubs/primo/site/2013december",
        image: "http://www.b2bmarketing.net/sites/all/themes/sitetheme/images/logo.gif"
      },
      {
        name: "SOCIAL NEWS: LinkedIn announces accessibility enhancements", 
        publication: "B2B Marketing", 
        reporter: "B2B Marketing",
        url: "http://www.b2bmarketing.net/news/archive/social-news-linkedin-announces-accessibility-enhancements",
        image: "http://www.ala.org/acrl/files/aboutacrl/directoryofleadership/sections/is/admin/imgs/color_Primo.gif"
      }, 
      {
        name: "LinkedIn Adds Accessibility Features", 
        publication: "WebProNews", 
        reporter: "Chris Crum",
        url: "http://www.webpronews.com/linkedin-adds-accessibility-features-2013-05",
        image: "http://www.seoinc.com/seo-blog/wp-content/uploads/2012/10/300x71xweb-pro-news-300x71.png.pagespeed.ic.rk2pdtXgS5.jpg"
      },
      {
        name: "East Palo Alto girls create app to clean up graffiti, trash", 
        publication: "Palo Alto Weekly", 
        reporter: "Elena Kadvany",
        url: "http://www.paloaltoonline.com/news/2013/05/11/east-palo-alto-girls-create-app-to-clean-up-graffiti-trash-",
        image: "http://paloaltoonline.com/art/top_logo.png"
      }
    ];
  }
});
