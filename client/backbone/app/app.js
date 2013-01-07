Proof = (function(Backbone, Marionette) {
	"use strict"

	var App = new Backbone.Marionette.Application();

	App.addRegions({
	  	header : "#header"
	  , main   : "#content"
	  , footer : "#footer"
	});

	App.on("initialize:after", function() {
	  if (Backbone.history) Backbone.history.start({
	  	  pushState: false
	  	, root: "/"
	  });
	});

	return App;

})(Backbone, Backbone.Marionette);

$(function() {
	Proof.start();
});
