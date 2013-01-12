Proof.module("Home.Views", function(Views, App, Backbone, Marionette, $, _) {

  Views.SidebarView = Marionette.ItemView.extend({
    template: "home/sidebar"

  });

  Views.Layout = Marionette.Layout.extend({
    template: "home/layout"

  , regions: {
        "sidebar":    "#sidebar"
    }

  , attachViews: function(views) {
      if (views.sidebar != null) this.sidebarView = views.sidebar;
    }

  , onRender: function() {
      this.sidebar.show(this.sidebarView);
    }

  });

});