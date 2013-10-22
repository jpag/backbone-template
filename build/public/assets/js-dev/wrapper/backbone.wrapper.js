define([
    'lib/jquery-1.7.2.min',
    'lib/underscore-min',
    'lib/backbone-min'
], function() {
    // Remove these libraries from the Global scope
    _.noConflict();
    return Backbone.noConflict();
    
});
