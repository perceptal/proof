Proof.module("Home.Views", function(Views, App, Backbone, Marionette, $, _) {

  Views.NavigationView = Marionette.ItemView.extend({
    template: "home/navigation"

  });

  Views.SummaryView = Marionette.ItemView.extend({
    template: "home/summary"

  });

  Views.Layout = Marionette.Layout.extend({
    template: "home/layout"

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
      if (views.summary != null) this.summaryView = views.summary;
    }

  , onRender: function() {
      this.aside.show(this.asideView);
      this.navigation.show(this.navigationView);
      if (this.summaryView != null) this.summary.show(this.summaryView);
    }

  });

});