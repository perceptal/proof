Proof.module("Home.Views", function(Views, App, Backbone, Marionette, $, _) {

  Views.AsideView = Marionette.ItemView.extend({
    template: "home/aside"

  });

  Views.NavigationView = Marionette.ItemView.extend({
    template: "home/navigation"

  });

  Views.Layout = Marionette.Layout.extend({
    template: "home/layout"

  , regions: {
        "navigation":     "#top"
      , "aside":          "#aside"
      , "list":           "#sidebar nav#selector"
      , "content":        "#content"
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