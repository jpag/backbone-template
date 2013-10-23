define([], function() {
  var urlRoot = global.urlRoot;
  var config = { 

  	links:[
  		{name: "Home" , link: "#" },
  		{name: "Privacy Policy" , link: "#" },
  		{name: "Terms of Use" , link: "#" },
  		{name: "Copyright" , link: "#" },
  		{name: "Contact Us" , link: "#" },
  		{name: "Corrections" , link: "#" },
  		{name: "Site Index" , link: "#" }
  	],

  	followBtns:[
		{link:"https://twitter.com/#" , classname: "twitter" },
		{link:"https://www.facebook.com/#" , classname: "facebook" },
		{link:"http://www.linkedin.com/#" , classname: "linkedin" },
		{link:"http://www.youtube.com/#" , classname: "youtube" }
  	]

  };
  return config;
});