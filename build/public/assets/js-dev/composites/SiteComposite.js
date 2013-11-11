/**
 * @name SiteComposite
 *
 * @description Top level Composite that handles all other composites and views.
 */
define([
    'jQuery',
    'Underscore',
    'Backbone',
    'views/contentExample'
], function(
    $,
    _,
    Backbone,
    ContentExample
) {

    "use strict";

    return Backbone.View.extend({

        EventAggregator:null,

        initialize : function () {

            Debug.trace( this.options );
            
            if( !this.options ){
                this.options = {};
            }
                _.defaults(this.options, {
                    EventAggregator : _.extend({}, Backbone.Events)
                });

            // Extend our object with additional properties.
            _.extend(this, {
                EventAggregator : this.options.EventAggregator
            });

            this.render();
        },

        /**
         * Build our subviews from our DOM elements
         */
        render : function () {
            Debug.trace(' RENDER - SITE COMPOSITE');
                
            // this.loadComposites();
            this.displayContentView();

            return this;
        },

        displayContentView : function (){
            var contentExample = new ContentExample({
                EventAggregator: this.EventAggregator
            });
            
            this.$el.append( contentExample.el );

        },
        
        // Dynamic way of requiring each view independently.
        // TODO: does not work well with the optimizer build script yet.
        loadComposites : function () {
            // this.createAndAppendView('views/XXXX');

        },

        createAndAppendView : function (viewPath) {
            var el = this.el,
                EventAggregator = this.EventAggregator;
                
            require([
                viewPath
            ], function( 
                View
                ){
                
                var view = new View({
                    el: el,
                    EventAggregator: EventAggregator
                });
            });
        }


      });
});