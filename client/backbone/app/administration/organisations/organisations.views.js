Proof.module("Administration.Organisations.Views", function(Views, App, Backbone, Marionette, $, _) {

  Views.NavigationView = Marionette.ItemView.extend({
    template: "administration/organisations/navigation"

  });

  Views.Layout = Marionette.Layout.extend({
    template: "administration/organisations/layout"

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