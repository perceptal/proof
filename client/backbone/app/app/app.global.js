Proof.module("Global", function(Global, App, Backbone, Marionette, $, _) {

  var PROOF_AUTH_COOKIE = "proof_auth";

	_.extend(App, {

	  signOn: function(session) {
      var id = session.get("id");

      this.session = session;

      // Save auth cookie
      $.cookie(PROOF_AUTH_COOKIE, id);

      // Now load user from session
      this.currentUser = new App.Authentication.Models.User({ id: id });
      var promise = this.currentUser.fetch();

      promise.done($.proxy(function() {
        App.vent.trigger("authentication:signedon", this.currentUser);
      }, this));
		}

  , determineAuthenticationStatus: function() {
      var that = this;

      var authCookie = $.cookie(PROOF_AUTH_COOKIE);
      
      if (authCookie != null) {
        var session = new App.Authentication.Models.SignOn({ id: authCookie })
          , promise = session.fetch();

        promise.done(function() {
          that.signOn(session);
        });

        promise.fail(signOut);

      } else signOut();

      function signOut() {
        App.vent.trigger("authentication:signout");
      }
  }

	,	signOut: function() {
      if (this.session) this.session.destroy();

      this.session = new App.Authentication.Models.SignOn();
      this.currentUser = new App.Authentication.Models.User();

      // Clear auth cookie
      $.removeCookie(PROOF_AUTH_COOKIE);

      // Navigate to home      

      App.vent.trigger("authentication:signedout");
		}

	, showMessage: function(text) {
      // TODO Change this to store model and bind changes to view

     	var message = new App.Views.MessageView({ model: new App.Models.Message({ text: text }) }); 
      App.layout.message.show(message);
		}

	, changeLocale: function(locale) {
			this.locale = locale;
			
      i18n.setLng(locale);

      App.vent.trigger("locale:changed");
		}
	});

	// Initialize global events
	Global.addInitializer(function() {
      
    App.vent.on("authentication:signon", function(session) {
    	App.signOn(session);
    });

    App.vent.on("authentication:signout", function(session) {
      App.signOut();
    });

    App.vent.on("authorization:failed", function() {
    	App.showMessage("Verboten!");
    });

    App.vent.on("locale:change", function(locale) {
    	App.changeLocale(locale);
    });

    App.determineAuthenticationStatus();

    App.vent.trigger("locale:change", i18n.lng());
	});

});