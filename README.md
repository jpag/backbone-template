## front end template

# CSS
	SASS css compiled with http://alphapixels.com/prepros/ (Free version)
	There is a dynamic fluid grid (responsive) as well as a static grid available
	Top and Bottom wrappers are using HTML5 boilerplate

# Javascript

	JQuery v1.10 (not 2.0) supports old IE.
	Backbone v 1.1 framework make sure to build the site before deploying.. with the build script.
	Underscore v 1.5.2
	Handlebars v 1.1.2

# HTML templating:

	- could use underscore interpolate to switch to {{}} handlebars/moustache style templating
    
    .templateSettings = {
     interpolate: /\{\{(.+?)\}\}/g
    };

	- or just use handlebars?


# Build Process
	We optimize our files using Require.

	First, install the requirejs npm package (if you haven't already):
    npm install -g requirejs

	Then run build.sh, which is found in /scripts:

    bash build.sh



## TODO:
	re-enable deeplinking with backbone history