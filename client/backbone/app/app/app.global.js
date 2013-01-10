Proof.module("Global", function(Global, App, Backbone, Marionette, $, _) {

	_.extend(App.constructor.prototype, {

		reload: function() {
			// ?
		}

	, signOn: function(session) {
      this.session = session;

      // Now load user from session

		}

	,	signOut: function() {
			this.session = new App.Authentication.Models.SignOn();
			this.currentUser = new App.Authentication.Models.User();

      // Navigate to home
      
      this.reload();
		}

	, showMessage: function(text) {
     	var message = new App.Views.MessageView({ model: new App.Models.Message({ text: text }) }); 
      App.layout.message.show(message);
		}

	, changeLocale: function(locale) {
			// Set locale

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

    App.vent.trigger("authentication:signedout");
	});

});