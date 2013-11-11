define([
    'jQuery',
    'Underscore',
    'Backbone',
    'Handlebars',
    'configs/footer',
    'text!templates/footerCompositeTemplate.html'
], function(
    $,
    _,
    Backbone,
    Handlebars,
    Config,
    CompositeTemplate
) {
    'use strict';

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

        render : function () {
            Debug.trace( ' ---- render footer template ---- ' );
            
            // underscore templating:
            // var createdTemplate = _.template(CompositeTemplate, Config);
            
            var template = Handlebars.compile(CompositeTemplate);
            var templateRender = template(Config);
            this.$el.append(templateRender);

            return this;
        },

        followUs: function (ev) {
            Debug.trace('footer follow us clicked');
            if( this.followClicked == false ){
                this.followClicked = true;

                this.$el.find('.followUs').remove();
                this.$el.find('.socialBtn').css({
                    'display':'inline-block'
                })

                gaTrackEvent('footer','follow-us-open','');

            }
        }

    });
});