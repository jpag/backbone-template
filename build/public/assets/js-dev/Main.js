/*
	CONFIG settings for REQUIRE JS
	PATHS etc refs to all libs.
*/
requirejs.config({
    baseUrl: 'assets/js-dev/',

    // Define aliases for the paths used.
    //
    // If you edit this section, make sure the analog edit goes into
    // build.js as well. These need to stay in sync.

    paths: {
        order:      'lib/order',
        jQuery:     'wrapper/jquery.wrapper',
        Underscore: 'wrapper/underscore.wrapper',
        Backbone:   'wrapper/backbone.wrapper',
        Handlebars: 'lib/handlebars-v1.1.2',
        text:       'lib/text',
        jScroll:    'lib/jquery.mousewheel.min',
        jEase:      'lib/jquery.easing.1.3.min'
    },
    priority: ['jQuery'],
    shim: {
        Backbone:{
            deps: ["jQuery", "Underscore"],
            exports: 'Backbone'
        },
        "jScroll":{
            deps:["jQuery"],
            exports:"jScroll"
        },
        "jEase":{
            deps:["jQuery"],
            exports:"jEase"
        },
        "Handlebars":{
            deps:["jQuery","Backbone"],
            exports: "Handlebars"
        }
    }
});

require([
    'jQuery',
    'Underscore',
    'Backbone',
    'Handlebars',
    'Router',
    'jScroll',
    'jEase'
], function(
    $,
    _,
    Backbone,
    Handlebars,
    Router
) {
    var router = new Router();

    //NO DEEPLINKING, this gets weird with this site being served in a sub folder
    // Backbone.history.start({
    //     pushState: true
    // });

});
