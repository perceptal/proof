Proof.module("Global", function(Global, App, Backbone, Marionette, $, _) {

  var PROOF_AUTH_COOKIE = "proof_auth"
    , PROOF_LOCALE_COOKIE = "proof_locale"
    , DEFAULT_LOCALE = "en";

	_.extend(App.constructor.prototype, {

		reload: function() {
			// ?
		}

	, signOn: function(session) {
      this.session = session;

      // Save auth cookie
      $.cookie(PROOF_AUTH_COOKIE, session.get("id"));

      // Now load user from session
 
      this.reload();
		}

  , determineAuthenticationStatus: function() {
      var that = this;

      var authCookie = $.cookie(PROOF_AUTH_COOKIE);
      
      if (authCookie != null) {
        var session = new App.Authentication.Models.SignOn({ id: authCookie })
          , promise = session.fetch();

        promise.done(function() {
          App.vent.trigger("authentication:signedon", session);
          that.signOn(session);
        });

        promise.fail(signOut);

      } else signOut();

      function signOut() {
        App.vent.trigger("authentication:signedout");
        that.signOut();        
      }
  }

	,	signOut: function() {
      if (this.session) this.session.destroy();

      this.session = new App.Authentication.Models.SignOn();
      this.currentUser = new App.Authentication.Models.User();

      // Clear auth cookie
      $.removeCookie(PROOF_AUTH_COOKIE);

      // Navigate to home
      
      this.reload();
		}

	, showMessage: function(text) {
     	var message = new App.Views.MessageView({ model: new App.Models.Message({ text: text }) }); 
      App.layout.message.show(message);
		}

	, changeLocale: function(locale) {
			// Set locale
			this.locale = locale;
			
      $.cookie(PROOF_LOCALE_COOKIE, locale);

			// Set i18n locale

			// Change url?

			this.reload();
		}
	});

	// Initialize global events
	Global.addInitializer(function() {
      
    App.vent.on("authentication:signedon", function(session) {
    	App.signOn(session);
    });

    App.vent.on("authentication:signedout", function(session) {
      App.signOut();
    });

    App.vent.on("authorization:failed", function() {
    	App.showMessage("Verboten!");
    });

    App.vent.on("locale:changed", function(locale) {
    	App.changeLocale(locale);
    });

    App.determineAuthenticationStatus();
    App.vent.trigger("locale:changed", $.cookie(PROOF_LOCALE_COOKIE) || DEFAULT_LOCALE);
	});

});