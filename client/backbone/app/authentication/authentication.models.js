Proof.module("Authentication.Models", function(Models, App, Backbone, Marionette, $, _) {

	Models.SignOn = Backbone.Model.extend({
		defaults: {
			email: "anonymous"
		,	sessionId: "-"
		}

	,	urlRoot: "/api/sessions"

	,	authenticationToken: function() {
			var username = this.get("email")
			  , password = this.get("sessionId");

			return window.btoa([ username, password ].join(":"));
		}
	});

	Models.User = Backbone.Model.extend({
		urlRoot: "/api/users"
	});

	Models.Users = Backbone.Collection.extend({
		url: "/api/users"
	});

});