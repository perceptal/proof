Proof = (function(Backbone, Marionette, i18n, _) {
	"use strict"

  var app = new Marionette.Application();

	app.on("initialize:after", function() {
	  if (Backbone.history) Backbone.history.start({
  	  pushState: false
  	, root: "/"
	  });
	});

  app.socket = io.connect("http://localhost:3000");

	return app;

})(Backbone, Backbone.Marionette, _);

$(function() {
  window.setTimeout(function() {
    Proof.start();
  }, 0);   
});
