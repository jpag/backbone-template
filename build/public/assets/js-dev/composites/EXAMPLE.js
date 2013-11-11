/**
 * @name SiteComposite
 *
 * @description Top level Composite that handles all other composites and views.
 */
define([
    'jQuery',
    'Underscore',
    'Backbone',
    'views/RealTimeView',
    'views/ContextView',
    'views/ExploreView'
], function(
    $,
    _,
    Backbone,
    RealTimeView,
    ContextView,
    ExploreView
) {

    "use strict";

    return Backbone.View.extend({

        EventAggregator:null,

        initialize : function () {

            // _.bindAll(this);

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
            var subViews,
                viewType,
                viewMethod;

            Debug.trace(' RENDER - SITE COMPOSITE');

            subViews = this.$el.find('.section');

            _.each(subViews, function(el) {
                viewType = $(el).data('type');
                viewMethod = 'create' + viewType + 'View';
                this[viewMethod](el);
            }, this);

          return this;
        },

        loadComposites : function () {
          
        },

        createcontextView : function (el) {
            var contextView = new ContextView({
                el : el,
                EventAggregator: this.EventAggregator
            });
        },

        createexploreView : function (el) {
            var exploreView = new ExploreView({
                el : el,
                EventAggregator: this.EventAggregator
            });
        },

        createrealTimeView : function (el) {
            var realTimeView = new RealTimeView({
                el : el
            });
        }

      });
});