define([
    'jQuery',
    'Underscore',
    'Backbone',
    'Handlebars',
    'text!templates/gridOverlay.html'
], function (
    $,
    _,
    Backbone,
    Handlebars,
    Template
) {

    "use strict";

    return Backbone.View.extend({
        
        className : "full-box",
        id : "grid-overlay",

        initialize : function () {
            // _.bindAll(this);
            this.render();

            $('body').on({
                "keyup" : _.bind(this.keyup, this)
            })
        },

        keyup : function(e) {
            Debug.trace(' keyUp' + e.keyCode );
            if( e.keyCode == 71 ){
                this.$el.toggleClass('active');
            }
        },

        render : function () {
            Debug.trace('rendering GRID Overlay');
            // var overlay = _.template(Template);
            // this.$el.append(overlay);

            var template = Handlebars.compile(Template);
            var templateRender = template();
            this.$el.append(templateRender);

            $('body').append(this.$el);
            
            return this;
        }

    });
});

