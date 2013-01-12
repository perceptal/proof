Proof.module("Views", function(Views, App, Backbone, Marionette, $, _) {

  Views.ModalRegion = Backbone.Marionette.Region.extend({
    
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

  , ui: {
      alert: "div.alert"
    }

  , initialize: function(options) {
      this.model = options.model;
      
      App.vent.on("section:changed", this.dismiss, this);
    }

  , dismiss: function() {
      this.ui.alert.alert("close");
    }

  });

  Views.NavigationView = Marionette.View.extend({
    template: "app/navigation"

  , ui: {
      items: "ul.nav li"
    }

  , initialize: function() {
      App.vent.on("section:changed", this.select, this);
    }

  , render: function() {
      this.$el.html(Marionette.Renderer.render(this.template, this));

      this.bindUIElements();
    }

  , select: function(section) {
      if (_.isUndefined(section)) return;

      this.ui.items
        .removeClass("active")
        .filter("." + section)
          .addClass("active");
    }
  });

  Views.HeaderView = Marionette.View.extend({
    template: "app/header"

  , initialize: function(options) {
      this.security = new Marionette.Region({ el: "#security" });
      this.navigation = new Marionette.Region({ el: "#navigation" });

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
      else
        this.showSignedOut();
      this.showNavigation(user);
    }

  , showNavigation: function(user) {
      this.navigation.show(new Views.NavigationView());
    }

  , showSignedOut: function() {
      this.security.show(new App.Security.Views.SignedOutView());
    }

  , showSignedOn: function(session) {
      this.security.show(new App.Security.Views.SignedOnView({ model: session }));
    }
  });

  Views.FooterView = Marionette.View.extend({
    template: "app/footer"

  , className: "container"

  , events: {
      "click .locale": "changeLocale"
    }

  , initialize: function(options) {
      var that = this;

      Handlebars.registerHelper("isSelected", function(locale) {
        return (that.locale || "").indexOf(locale) ? "" : "selected";
      });

      options = options || {};
      this.locale = options.locale;
      
      App.vent.on("locale:change", function(locale) {
        that.locale = locale;
        that.render();
      });
   }

  , render: function() {
      this.$el.html(Marionette.Renderer.render(this.template, this));
    }

  , changeLocale: function(e) {
      App.vent.trigger("locale:change", $(e.target).data("locale"));

      return false;
    }
  });

  Views.Layout = Marionette.Layout.extend({
    template: "app/layout/main"

  , el: "body"

  , regions: {
      header  : "#header"
    , main    : "#content"
    , footer  : "#footer"
    , message : "#message"
    , modal   : Views.ModalRegion
  }

  , attachViews: function(views) {
      if (views.header != null) this.headerView = views.header;
      if (views.footer != null) this.footerView = views.footer;
    }

  , onRender: function() {
      this.header.show(this.headerView);
      this.footer.show(this.footerView);
    }
  });

  Views.addInitializer(function() {
    App.layout = new Views.Layout();

    App.layout.attachViews({
      header: new Views.HeaderView()
    , footer: new Views.FooterView()
    });

    App.layout.render();
  });

});