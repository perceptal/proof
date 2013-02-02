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

  Models.Role = SecuredModel.extend({ 
    urlRoot: "/api/roles"

  , validation: {
      name: {
        required: true
      , msg: "validation:required"
      }
    }

  });

  Models.Roles = SecuredCollection.extend({
    model: Models.Role

  , initialize: function(attributes, options) {
      options || (options = {});
      this.bind("error", this.defaultErrorHandler, this);
      this.init && this.init(attributes, options);

      this.parent = options.parent;
    }

  , url: function() {
      return "/api/" + this.parent.name + "/" + this.parent.id + "/roles";
    }
  });
});