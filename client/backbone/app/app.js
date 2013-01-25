Proof = (function(Backbone, Marionette, i18n) {
	"use strict"

  var app = new Marionette.Application();

	app.on("initialize:after", function() {
	  if (Backbone.history) Backbone.history.start({
  	  pushState: false
  	, root: "/"
	  });
	});

	return app;

})(Backbone, Backbone.Marionette);

$(function() {
  window.setTimeout(function() {
    Proof.start();
  }, 0);   
});
