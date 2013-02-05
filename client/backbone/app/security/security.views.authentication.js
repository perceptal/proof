Proof.module("Security.Views", function(Views, App, Backbone, Marionette, $, _) {

  var SignOn = App.Security.Models.SignOn
    , User = App.Security.Models.User
    , RegisterView = App.Security.Views.RegisterView;

  Views.SignOnView = Marionette.ItemView.extend({
    template: "security/signon"
  
  , ui: {
      "code"    : "input#code"
    , "name"    : "input#name"
    , "password": "input#password"
    , "alert"   : ".alert"
    }

  , events: {
      "click    button#signon"  : "signOn"
    , "keypress input"          : "onKeypress"
    , "change   input"          : "onChange"
    }

  , onRender: function() {
      App.vent.bindTo(App.vent, "modal:shown", this.setFocus, this);
    }

  , setFocus: function(e) {
      this.ui.code.focus();
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
        App.vent.trigger("security:signon", new SignOn(data));
        that.close();
      });

      promise.fail(function(response) {
        if (response.status === 404 || response.status === 403) {
          that.alert(i18n.t("error.security.invalid_credentials"));
        } else if (response.status === 500) {
          that.alert(i18n.t("error.general.try_again"));
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
      return this.modal(new RegisterView({ model: new User() }));
    }

  , showSignOn: function(e) {
      return this.modal(new Views.SignOnView({ model: new SignOn() }));
    }

  , modal: function(view) {
      App.layout.modal.show(view);

      return false;
    }

  });

});