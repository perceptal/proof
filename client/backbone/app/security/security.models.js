Proof.module("Security.Models", function(Models, App, Backbone, Marionette, $, _) {

  var ANONYMOUS = "anonymous"
    , NO_SESSION = "|";

  var SecuredModel = App.Common.Models.SecuredModel
    , SecuredCollection = App.Common.Models.SecuredCollection;

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

	Models.User = SecuredModel.extend({
		urlRoot: "/api/users"

	});

	Models.Users = SecuredCollection.extend({
		url: "/api/users"
	
  });

});