var Proof = new Backbone.Marionette.Application();

Proof.addRegions({
  	header : "#main header"
  , main   : "#body .content"
  , footer : "footer"
});

Proof.on("initialize:after", function() {
  Backbone.history.start();
});