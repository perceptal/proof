Proof.module("Security.Views", function(Views, App, Backbone, Marionette, $, _) {

  Views.SignOnView = Marionette.ItemView.extend({
    template: "security/signon"
  
  , ui: {
      "username": "input#username"
    , "password": "input#password"
    , "alert"   : ".alert"
    }

  , events: {
      "click    button#signon"  : "signOn"
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
        this.signOn();
      }
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
        App.vent.trigger("security:signon", new App.Security.Models.SignOn(data));
        that.close();
      });

      promise.fail(function(response) { console.log(response)
        if (response.status === 404 || response.status === 403) {
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
    template: "security/signedon"
  
  , events: {
      "click .signout": "signOut"
    }

  , initialize: function(options) {
      this.model = options.model;
    }

  , signOut: function() {
      App.vent.trigger("security:signout");

      return false;
    } 
  });

  Views.SignedOutView = Marionette.ItemView.extend({
    template: "security/signedout"

  , events: {
      "click .signon": "showSignOn"
    , "click .register": "showRegister"
    }

  , showRegister: function(e) {
      var view = new App.Security.Views.RegisterView({ 
        model: new App.Security.Models.User() 
      });

      return this.modal(view);
    }

  , showSignOn: function(e) {
      var view = new App.Security.Views.SignOnView({ 
        model: new App.Security.Models.SignOn() 
      });

      return this.modal(view);
    }

  , modal: function(view) {
      App.layout.modal.show(view);
      return false;
    }

  });

});