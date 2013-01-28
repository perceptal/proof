Proof.module("Global", function(Global, App, Backbone, Marionette, $, _) {

  var PROOF_AUTH_COOKIE = "proof_auth";

	_.extend(App, {

    refresh: function() {
      if (Backbone.history && Backbone.history.fragment)
        Backbone.history.loadUrl(Backbone.history.fragment);
    }

  ,	signOn: function(session) {
      var id = session.get("id");

      Global.session = session;

      // Save auth cookie
      $.cookie(PROOF_AUTH_COOKIE, id);

      // Now load user from session
      Global.currentUser = new App.Security.Models.User({ id: id });
      
      Global.currentUser.fetch()
        .done(function() {
          App.vent.trigger("security:signedon", Global.session, Global.currentUser);
          App.vent.trigger("section:changed", Global.section);
        });
		}

  , determineAuthenticationStatus: function() {
      var that = this;

      var authCookie = $.cookie(PROOF_AUTH_COOKIE);
      
      if (authCookie != null) {
        var session = new App.Security.Models.SignOn({ id: authCookie })
          , promise = session.fetch({ async: false });                      // TODO add to Q

        promise.done(function() {
          that.signOn(session);
        });

        promise.fail(signOut);

      } else signOut();

      function signOut() {
        App.vent.trigger("security:signout");
      }
    }

	,	signOut: function() {
      if (this.session) this.session.destroy();

      Global.session = new App.Security.Models.SignOn();
      Global.currentUser = new App.Security.Models.User();

      // Clear auth cookie
      $.removeCookie(PROOF_AUTH_COOKIE);

      // Navigate to home      
      App.Home.router.navigate("/", true);

      App.vent.trigger("security:signedout", Global.session, Global.currentUser);
      App.vent.trigger("section:changed", Global.section);
		}

  , showMessage: function(data) {
      if (this.messages == null) {
        this.messages = new App.Models.Messages();
      } else {
        this.messageRegion.close();
      }

      if (!_.isObject(data)) data = { text: data };
      var message = new App.Models.Message(data);

      if (message.isError()) this.messages.clearNonErrors();
      if ((!message.isError() && !this.messages.hasErrors()) || message.isError()) this.messages.add(message);

      this.messageRegion = new Marionette.Region({ el: "#message" });
      this.messageRegion.show(new App.Views.MessageListView({ collection: this.messages }));
    }

  , clearMessages: function() {
      if (this.messages) this.messages.reset([]);
    }

  , changeLocale: function(locale) {
      i18n.setLng(locale);

      App.vent.trigger("locale:changed", Global.session, Global.currentUser);  
      App.vent.trigger("section:changed", Global.section);  
    }

  , changeSection: function(section) {
      Global.section = section;   
      App.vent.trigger("section:changed", Global.section);  
    }

	});

	// Initialize global events
	Global.addInitializer(function() {
    App.vent.on("section:change", App.changeSection, this);
    App.vent.on("security:signon", App.signOn, this);
    App.vent.on("security:signout", App.signOut, this);
    App.vent.on("security:signedon", App.refresh, this);
    App.vent.on("locale:change", App.changeLocale, this);
    App.vent.on("locale:changed", App.refresh, this);
    App.vent.on("message:show", App.showMessage, this);
    App.vent.on("message:clear", App.clearMessages, this);

    App.vent.on("security:unauthorised", function() {
    	App.vent.trigger("message:show", i18n.t("error:security.unauthorised"));
    }, this);

    App.determineAuthenticationStatus();

    App.vent.trigger("locale:change", i18n.lng());
	});

});