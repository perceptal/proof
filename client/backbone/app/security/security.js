Proof.module("Security", function(Security, App, Backbone, Marionette, $, _) {
  
  Security.Router = Marionette.AppRouter.extend({
    appRoutes: {
      "profile"           : "profile"
    }
  });

  Security.Controller = Marionette.Controller.extend({

    initialize: function() {
    }

  , profile: function() {
      this.sidebarView = new Security.Views.SidebarView();

      this.layout = new Security.Views.Layout();
      this.layout.attachViews({ 
        sidebar: this.sidebarView
      });
      this.layout.render();

      App.layout.main.show(this.layout);
    }

  });

  Security.addInitializer(function() {
    Security.router = new Security.Router({ controller: new Security.Controller() });
  });
});