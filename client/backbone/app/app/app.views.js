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

	Views.HeaderView = Marionette.ItemView.extend({
	  template: "app/header"

  , initialize: function() {
      this.authentication = new Marionette.Region({ el: "#authentication" });
    }

  , showAuthentication: function() {
      this.authentication.show(new App.Authentication.Views.SignedOutView());
    }
	});

	Views.FooterView = Marionette.ItemView.extend({
    template: "app/footer"

  , className: "container"
	});

	Views.Layout = Marionette.Layout.extend({
  	template: "app/layout"

  ,	el: "body"

  , regions: {
  		header: "#header"
  	, main  : "#content"
  	, footer: "#footer"
    , modal : Views.ModalRegion
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

    App.layout.header.currentView.showAuthentication();
	});

});