define([
    'jQuery',
    'Underscore',
    'Backbone',
    'composites/SiteComposite',
    'composites/FooterComposite'
], function(
    $,
    _,
    Backbone,
    SiteComposite,
    FooterComposite
) {

    "use strict";

    return Backbone.Router.extend({

        EventAggregator:null,
        
        throttleDelay: 200,

        initialize : function(params){
            // _.bindAll(this, 'resize','mousewheel','scroll','touchmove');

            params = params || {};

            _.defaults(params, {
                windowObject    : window
            });

            _.extend(this, {
                windowObject    : params.windowObject
            });

            this.route(/^$/, 'home', this.home);

            $(this.windowObject).bind({
                "resize"    : _.bind( _.throttle(this.resize,this.throttleDelay), this),
                "mousewheel": _.bind(this.scroll,this),
                "scroll"    : _.bind(this.scroll,this),
                "touchmove" : _.bind(this.scroll,this)
            });

            //create EVENT manager 'vent'
            //http://lostechies.com/derickbailey/2011/07/19/references-routing-and-the-event-aggregator-coordinating-views-in-backbone-js/
            this.EventAggregator = _.extend({}, Backbone.Events);
            
            // in views:
            //this.EventAggregator.bind("render:resize", this.resize );
            //this.EventAggregator.bind("window:Scroll", this.scrollEvent );
            
            this.home();
        },

        initializeComposites : function () {
            
            this.footerComposite = new FooterComposite({
                el : $('#footer-composite'),
                EventAggregator: this.EventAggregator
            });

            this.siteComposite = new SiteComposite({
                el : $("#site-composite"),
                EventAggregator: this.EventAggregator
            });


            this.insertGridView();

            $("#siteloader")
                .delay(100)
                .animate({
                    "top": "25px"
                })
                .animate({
                    "opacity":0,
                    'top':'-100px'
                }, {
                    duration: 300,
                    complete: this.revealAll
                    //easing:'easeInBounce'
                });
        },

        insertGridView : function () {
            // First determine if you are in debug mode: 
            if( Debug.active == true ){
                require([
                    'views/gridOverlay'
                ], function( 
                    GridOverlay
                    ){

                    new GridOverlay();
                    
                });
            }
        },

        revealAll : function (){
            $("#site-composite").fadeIn();
            $("#siteloader-wrapper").remove();
        },

        home : function () {
            this.initializeComposites();
        },

        // --- EVENTS to dispatch throughout:
        scroll : function(event, delta ){
            Debug.trace( ' scroll! ');
            this.EventAggregator.trigger('window:Scroll' , {event:event, delta:delta} )
        },

        resize : function(event){
            Debug.trace(' trigger resize ' );
            this.EventAggregator.trigger("window:Resize" , {event:event});
        }

    });

});