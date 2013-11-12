define([
    'lib/jquery-1.10.2.min',
    'lib/underscore-min',
    'lib/backbone-min.1.1.0'
], function() {
    // Remove these libraries from the Global scope
    _.noConflict();
    return Backbone.noConflict();
    
});
