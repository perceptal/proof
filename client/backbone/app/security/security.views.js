Proof.module("Security.Views", function(Views, App, Backbone, Marionette, $, _) {

  var FormView = App.Common.Views.FormView;

  Views.RoleView = FormView.extend({
    template: "security/role"

  , ui: {
      name : "input#name"
    }

  , messages: {
      error: "security.role"
    }

  , initialize: function() {
      this.autoSave = false;
      this.focus = "name";
    }
  });

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
		}

	, alert: function(message) {
			this.ui.alert.text(message).hide().fadeIn();
		}
	});

});