define([
    'jQuery',
    'Underscore',
    'Backbone',
    'configs/contentExample',
    'text!templates/contentExample.html'
], function (
    $,
    _,
    Backbone,
    Config,
    Template
) {

    "use strict";

    return Backbone.View.extend({
        
        id : "contentExample",

        initialize : function () {
            _.bindAll(this);
            this.render();
        },

        render : function () {
            Debug.trace('rendering Content Example view');
            var rendered = _.template(Template , Config );
            this.$el.append(rendered);
            return this;
        }

    });
});

