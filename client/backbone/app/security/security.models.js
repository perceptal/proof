Proof.module("Security.Models", function(Models, App, Backbone, Marionette, $, _) {

  var ANONYMOUS = "anonymous"
    , NO_SESSION = "|";

	Models.SignOn = Backbone.Model.extend({
		defaults: {
			name: ANONYMOUS
		,	sessionId: NO_SESSION
		}

	,	urlRoot: "/api/sessions"

	,	authenticationToken: function() {
			var name = this.get("name")
			  , session = this.get("sessionId");

			return window.btoa([ name, session ].join(":"));
		}

  , isAuthenticated: function() {
      return this.get("name") !== ANONYMOUS;
    }
	});

	Models.User = Backbone.Model.extend({
		urlRoot: "/api/users"

	});

	Models.Users = Backbone.Collection.extend({
		url: "/api/users"
	
  });

});