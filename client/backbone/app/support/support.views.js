Proof.module("Support.Views", function(Views, App, Backbone, Marionette, $, _) {

  Views.NavigationView = Marionette.ItemView.extend({
    template: "support/navigation"

  });

  Views.Layout = Marionette.Layout.extend({
    template: "support/layout"

  , regions: {
        "navigation":     "#top"
      , "aside":          "#aside"
      , "summary":        "#summary"
      , "menu":           "#menu"
      , "inner":          "#inner"
    }

  , initialize: function(views) {
      if (views.aside != null) this.asideView = views.aside;
      if (views.navigation != null) this.navigationView = views.navigation;
    }

  , onRender: function() {
      this.aside.show(this.asideView);
      this.navigation.show(this.navigationView);
    }

  });

});