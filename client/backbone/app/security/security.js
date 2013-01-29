Proof.module("Security", function(Security, App, Backbone, Marionette, $, _) {
  
  var Layout = Security.Views.Layout
    , SidebarView = Security.Views.SidebarView;

  Security.Router = Marionette.AppRouter.extend({
    appRoutes: {
      "profile"           : "profile"
    }
  });

  Security.Controller = Marionette.Controller.extend({

    initialize: function() {
    }

  , profile: function() {
      this.layout = new Layout({
        sidebar: new SidebarView()
      });
      this.layout.render();

      App.layout.main.show(this.layout);
    }

  });

  Security.addInitializer(function() {
    Security.router = new Security.Router({ controller: new Security.Controller() });
  });
});