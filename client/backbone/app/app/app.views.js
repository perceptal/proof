Proof.module("Views", function(Views, App, Backbone, Marionette, $, _) {

  Views.ModalRegion = Marionette.Region.extend({
    
    el: "#modal"
 
  , constructor: function() {
      Marionette.Region.prototype.constructor.apply(this, arguments);

      this.on("show", this.showModal, this);
    }
 
  , getEl: function(selector) {
      var $el = $(selector);
      $el.on("hidden", this.close);

      return $el;
    }
 
  , showModal: function(view) {
      view.on("close", this.hideModal, this);
      this.$el.modal("show").on("shown", function() {
        App.vent.trigger("modal:shown");
      });
    }
 
  , hideModal: function() {
      this.$el.modal("hide");
    }
  });

  Views.MessageView = Marionette.ItemView.extend({
    template: "app/message"

  });

  Views.NavigationView = Marionette.View.extend({
    template: "app/navigation"

  , ui: {
      items: "ul li a"
    }

  , initialize: function() {
      App.vent.on("section:changed", this.render, this);
    }

  , render: function() {
      this.$el.html(Marionette.Renderer.render(this.template, this));
      this.bindUIElements();
      this.select(App.Global.section);
    }

  , select: function(section) {
      if (_.isUndefined(section)) return;

      this.ui.items
        .removeClass("active")
        .filter("." + section)
          .addClass("active");
      this.ui.items.tooltip({ delay: { show: 500, hide: 100 } });
    }
  });

  Views.LocaleView = Marionette.View.extend({
    template: "app/locale"

  , ui: {
      items: "ul li"
    }

  , events: {
      "click .locale": "onChangeLocale"
    }

  , render: function() {
      this.$el.html(Marionette.Renderer.render(this.template, this));

      this.bindUIElements();
      this.changeLocale(i18n.lng());
    }

  , onChangeLocale: function(e) {
      var locale = $(e.currentTarget).data("locale");
      App.vent.trigger("locale:change", locale);
      return false;
    }

  , changeLocale: function(locale) {
      if (_.isUndefined(locale)) return;

      this.ui.items
        .removeClass("active")
        .filter("." + locale)
          .addClass("active");
    }
  });

  Views.HeaderView = Marionette.View.extend({
    template: "app/header"

  , initialize: function(options) {
      var that = this;

      options = options || {};
      this.locale = options.locale;

      this.security = new Marionette.Region({ el: "#security" });
      this.locale = new Marionette.Region({ el: "#locale" });
      
      App.vent.on("security:signedon", this.reload, this);
      App.vent.on("security:signedout", this.reload, this);
      App.vent.on("locale:changed", this.reload, this);
    }

  , render: function() {
      this.$el.html(Marionette.Renderer.render(this.template, this));
    }

  , reload: function(session, user) {
      session = session || App.session;

      if (session && session.isAuthenticated())
        this.showSignedOn(session);
      else if (session)
        this.showSignedOut();

      this.showLocale();

      this.$el.find(".logo").text(i18n.translate("main.title"));
    }

  , showSignedOut: function() {
      this.security.show(new App.Security.Views.SignedOutView());
    }

  , showSignedOn: function(session) {
      this.security.show(new App.Security.Views.SignedOnView({ model: session }));
    }

  , showLocale: function() {
      this.locale.show(new Views.LocaleView());
    }
  });

  Views.Layout = Marionette.Layout.extend({
    template: "app/layout/main"

  , el: "body"

  , regions: {
      header        : "#header"
    , main          : "#contents"
    , navigation    : "nav#primary"
    , modal         : Views.ModalRegion
  }

  , initialize: function(views) {
      if (views.header != null) this.headerView = views.header;
      if (views.navigation != null) this.navigationView = views.navigation;
    }

  , onRender: function() {
      this.header.show(this.headerView);
      this.navigation.show(this.navigationView);
    }
  });

  Views.addInitializer(function() {
    App.layout = new Views.Layout({
      header: new Views.HeaderView()
    , navigation: new Views.NavigationView()
    });

    App.layout.render();
  });

});