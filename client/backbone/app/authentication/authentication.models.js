Proof.module("Authentication.Models", function(Models, App, Backbone, Marionette, $, _) {

	Models.SignOn = Backbone.Model.extend({
		urlRoot: "/api/session"

	,	authenticationToken: function() {
			var username = this.get("email")
			  , password = this.get("sessionId");

			return window.btoa([ username, password ].join(":"));
		}
	});

});