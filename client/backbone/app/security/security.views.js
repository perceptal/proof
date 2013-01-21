Proof.module("Security.Views", function(Views, App, Backbone, Marionette, $, _) {

	Views.RegisterView = Marionette.ItemView.extend({
	  template: "security/register"
  
  , ui: {
  		"username": "input#username"
  	, "password": "input#password"
  	, "alert"   : ".alert"
  	}

  , events: {
  	  "click    button#register": "register"
    , "keypress input#username" : "onKeypress"
    , "keypress input#password" : "onKeypress"
  	, "change   input#username" : "onChange"
  	, "change   input#password" : "onChange"
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

  , onKeypress: function(e) {
      if (e.keyCode === 13) {
        this.onChange(e);
        this.register();
      }
    }

	, onChange: function(e) {
		  var prop = e.target.id
				, value = this.ui[prop].val().trim();
			
			this.model.set(prop, value);
		}

	, register: function(e) {
			// var that = this
			//   , promise = this.model.save();

			// promise.done(function(data) {
			// 	App.vent.trigger("security:signon", new App.Security.Models.SignOn(data));
			// 	that.close();
			// });

			// promise.fail(function(response) {	
			// 	if (response.status === 404) {
			// 		that.alert("You have entered invalid credentials.");
			// 	} else if (response.status === 500) {
			// 		that.alert("Application error, please try again.");
			// 	}
			// 	that.setFocus();
			// });
		}

	, alert: function(message) {
			this.ui.alert.text(message).hide().fadeIn();
		}
	});

});