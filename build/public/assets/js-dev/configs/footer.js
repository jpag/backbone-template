define([], function() {
  var urlRoot = global.urlRoot;
  var config = { 

  	links:[
  		{name: "Thomsonreuters.com" , link: "http://www.thomsonreuters.com" },
  		{name: "Privacy Policy" , link: "http://www.reuters.com/privacy-policy" },
  		{name: "Terms of Use" , link: "http://www.reuters.com/terms-of-use" },
  		{name: "Copyright" , link: "http://thomsonreuters.com/copyright" },
  		{name: "Contact Us" , link: "https://reuters.zendesk.com" },
  		{name: "Corrections" , link: "https://reuters.zendesk.com/anonymous_requests/new" },
  		{name: "Site Index" , link: "ttp://www.reuters.com/assets/siteindex" }
  	],

  	followBtns:[
		{link:"https://twitter.com/Reuters" , classname: "twitter" },
		{link:"https://www.facebook.com/Reuters" , classname: "facebook" },
		{link:"http://www.linkedin.com/today/reuters.com" , classname: "linkedin" },
		{link:"http://www.youtube.com/reuters" , classname: "youtube" }
  	]

  };
  return config;
});