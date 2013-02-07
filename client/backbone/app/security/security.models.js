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

  , initialize: function(options, attributes) {
      options || (options = {});
      this.init && this.init(attributes, options);

      this.on("change", this.setPerson, this);

      this.setupIoBind();
    }

  , setPerson: function() {
      if (this.get("people") && this.get("people").length) {
        this.set("person", _(this.get("people")).first());
      }
    }

	});

	Models.Users = SecuredCollection.extend({
		url: "/api/users"
	
  });

});