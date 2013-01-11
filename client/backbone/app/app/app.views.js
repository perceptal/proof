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

  , initialize: function(options) {
      this.section = options.section;

      App.vent.on("section:changed", this.render, this);
      App.vent.trigger("section:changed", options.section);
    }

  , render: function(section) {
      this.$el.html(Marionette.Renderer.render(this.template, this));

      this.bindUIElements();

      this.ui.items
        .removeClass("active")
        .filter("." + section || this.section)
          .addClass("active");
    }

  });

  Views.HeaderView = Marionette.View.extend({
    template: "app/header"

  , initialize: function(options) {
      this.section = options.section;

      this.authentication = new Marionette.Region({ el: "#authentication" });
      this.navigation = new Marionette.Region({ el: "#navigation" });

      App.vent.on("authentication:signedon", this.reload, this);
      App.vent.on("authentication:signedout", this.reload, this);
      App.vent.on("locale:changed", this.reload, this);
    }

  , render: function() {
      this.$el.html(Marionette.Renderer.render(this.template, this));
    }

  , reload: function() {
      if (App.session && App.session.isAuthenticated())
        this.showSignedOn(App.session);
      else
        this.showSignedOut();
      this.showNavigation();
    }

  , showNavigation: function() {
      this.navigation.show(new Views.NavigationView({ section: this.section }));
    }

  , showSignedOut: function() {
      this.authentication.show(new App.Authentication.Views.SignedOutView());
    }

  , showSignedOn: function(session) {
      this.authentication.show(new App.Authentication.Views.SignedOnView({ model: session }));
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
    template: "app/layout"

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
      header: new Views.HeaderView({ section: "home" })
    , footer: new Views.FooterView()
    });

    App.layout.render();
  });

});