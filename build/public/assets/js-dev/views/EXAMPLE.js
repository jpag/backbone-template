define([
    'jQuery',
    'Underscore',
    'Backbone',
    'configs/realtime',
    'text!templates/realTimeTemplate.html'
], function (
    $,
    _,
    Backbone,
    Config,
    Template
) {

    "use strict";

    return Backbone.View.extend({

        initialize : function () {
            // _.bindAll(this);
            this.render();
        },

        render : function () {
            Debug.trace('rendering real time view');
            var videoViewHTML = _.template(Template , Config );
            this.$el.append(videoViewHTML);
            return this;
        }

    });
});

