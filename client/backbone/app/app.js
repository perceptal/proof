Proof = (function(Backbone, Marionette, i18n, _) {
	"use strict"

  var app = new Marionette.Application();

	app.on("initialize:after", function() {
	  if (Backbone.history) Backbone.history.start({
  	  pushState: false
  	, root: "/"
	  });
	});

  app.socket = io.connect();

	return app;

})(Backbone, Backbone.Marionette, _);

$(function() {
  window.setTimeout(function() {
    $("#loading").hide();

    Proof.start();
  }, 0);   
});
