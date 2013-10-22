define([
    'jQuery',
    'Underscore',
    'Backbone',
    //'composites/HeaderComposite',
    //'composites/SiteComposite',
    //'composites/BottomComposite',
    'composites/FooterComposite'
], function(
    $,
    _,
    Backbone,
    // HeaderComposite,
    // SiteComposite,
    // BottomComposite,
    FooterComposite
) {

    "use strict";

    return Backbone.Router.extend({

        EventAggregator:null,
        
        initialize : function(params){
            _.bindAll(this);

            params = params || {};

            _.defaults(params, {
                windowObject    : window
            });

            _.extend(this, {
                windowObject    : params.windowObject
            });

            this.route(/^$/, 'home', this.home);

            $(this.windowObject).bind({
                "resize" : this.resize,
                "mousewheel" : this.scroll,
                "scroll" : this.scroll,
                "touchmove" : this.scroll
            });

            //create EVENT manager 'vent'
            //http://lostechies.com/derickbailey/2011/07/19/references-routing-and-the-event-aggregator-coordinating-views-in-backbone-js/
            this.EventAggregator = _.extend({}, Backbone.Events);
            //this.EventAggregator.bind("render:resize", this.resize );
            //this.EventAggregator.bind("window:Scroll", this.scrollEvent );
            //Debug.trace("ROUTER");
            this.home();
        },

        initializeComposites : function () {
            
            this.footerComposite = new FooterComposite({
                el : $('#footer-composite'),
                EventAggregator: this.EventAggregator
            });
            
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

        revealAll : function (){
            $("#master-wrapper").fadeIn();
            $("#siteloader-wrapper").remove();
        },

        home : function () {
            this.initializeComposites();
        },

        //EVENTS:
        scroll : function(event, delta ){
            //Debug.trace( ' scroll! ');
            this.EventAggregator.trigger('window:Scroll' , {event:event, delta:delta} )
        },

        resize : function(event){
            Debug.trace(' trigger resize ' );
            this.EventAggregator.trigger("window:Resize" , {event:event});
        }

    });

});