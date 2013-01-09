Proof.module("Authentication.Models", function(Models, App, Backbone, Marionette, $, _) {

	Models.SignOn = Backbone.Model.extend({
		urlRoot: "/api/session"
	});

});