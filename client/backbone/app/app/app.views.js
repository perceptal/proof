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

  , initialize: function(options) {
      this.model = options.model;
    }
  });

	Views.HeaderView = Marionette.ItemView.extend({
	  template: "app/header"

  , initialize: function() {
      var that = this;

      this.authentication = new Marionette.Region({ el: "#authentication" });

      App.vent.on("authentication:signedon", function(session) {
        that.showSignedOn(session);
      });

      App.vent.on("authentication:signedout", function(session) {
        that.showSignedOut();
      });
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
        return that.locale === locale ? "selected" : "";
      });

      options = options || {};
      this.locale = options.locale;
      
      App.vent.on("locale:changed", function(locale) {
        that.locale = locale;
        that.render();
      });
   }

  , render: function() {
      var html = Marionette.Renderer.render(this.template, this);
      this.$el.html(html);
    }

  , changeLocale: function(e) {
      App.vent.trigger("locale:changed", $(e.target).data("locale"));

      return false;
    }
	});

	Views.Layout = Marionette.Layout.extend({
  	template: "app/layout"

  ,	el: "body"

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