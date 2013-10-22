define([
    "jQuery",
    "Underscore",
    "Backbone",
    "configs/footer",
    "text!templates/footerCompositeTemplate.html"
], function(
    $,
    _,
    Backbone,
    Config,
    CompositeTemplate
) {
    "use strict";

    return Backbone.View.extend({

        followClicked:false,
        EventAggregator:null,

        events : {
           'click #follow-us'    : 'followUs'
        },

        initialize : function () {
            //_.bindAll(this);

            this.render();
        },

        /* build content/templates */
        render : function () {
            //create
            Debug.trace( ' ---- render footer template ---- ' );
            Debug.trace( Config );
            var createdTemplate = _.template(CompositeTemplate, Config);
            //this BREAKS IE8..
            this.$el.append(createdTemplate);

            return this;
        },

        followUs: function (ev) {
            Debug.trace('footer follow us clicked');
            if( this.followClicked == false ){
                this.followClicked = true;

                this.$el.find(".followUs").remove();
                this.$el.find(".socialBtn").css({
                    "display":"inline-block"
                })

                gaTrackEvent("footer","follow-us-open","");

            }
        }

    });
});