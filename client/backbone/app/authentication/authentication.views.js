Proof.module("Authentication.Views", function(Views, App, Backbone, Marionette, $, _) {

	Views.SignOnView = Marionette.ItemView.extend({
	  template: "authentication/signon"
  
  , ui: {
  		"username": "input#username"
  	, "password": "input#password"
  	, "alert"   : ".alert"
  	}

  , events: {
  	  "click button#signon"  : "signOn"
  	, "change input#username": "onChange"
  	, "change input#password": "onChange"
  	}

  , initialize: function(options) {
  		this.model = options.model;
  	}

  , onRender: function() {
			App.vent.bindTo(App.vent, "modal:shown", this.setFocus, this);
  	}

  , setFocus: function(e) {
	  	this.ui.username.focus();
	  }

	, onChange: function(e) {
		  var prop = e.target.id
				, value = this.ui[prop].val().trim();
			
			this.model.set(prop, value);
		}

	, signOn: function(e) {
			var that = this
			  , promise = this.model.save();

			promise.done(function(data) {
				App.vent.trigger("authentication:signedon", new App.Authentication.Models.SignOn(data));
				that.close();
			});

			promise.fail(function(response) {	
				if (response.status === 404) {
					that.alert("You have entered invalid credentials.");
				} else if (response.status === 500) {
					that.alert("Application error, please try again.");
				}
				that.setFocus();
			});
		}

	, alert: function(message) {
			this.ui.alert.text(message).hide().fadeIn();
		}
	});

	Views.SignedOnView = Marionette.ItemView.extend({
	  template: "authentication/signedon"
  
	, events: {
			"click .signout": "signOut"
	  }

  , initialize: function(options) {
  		this.model = options.model;
  	}

  , signOut: function() {
  		App.vent.trigger("authentication:signedout");

  		return false;
  	}	
	});

	Views.SignedOutView = Marionette.ItemView.extend({
	  template: "authentication/signedout"

	, events: {
			"click .signon": "showSignOn"
	  }

	, showSignOn: function(e) {
			
			var model = new App.Authentication.Models.SignOn();
			var view = new Views.SignOnView({ model: model });

			App.layout.modal.show(view);

			return false;
		}

	});

});