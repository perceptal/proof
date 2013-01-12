Proof.module("Home", function(Home, App, Backbone, Marionette, $, _) {

  Home.Router = Marionette.AppRouter.extend({
    appRoutes: {
      ""              : "index"
    , "home"          : "index"
    }
  });

  Home.Controller = Marionette.Controller.extend({

    select: function() {
      App.vent.trigger("section:changed", "home");
    }

  , index: function() {
      this.select();

      this.sidebarView = new Home.Views.SidebarView();

      this.layout = new Home.Views.Layout();
      this.layout.attachViews({ 
        sidebar: this.sidebarView
      });
      this.layout.render();

      App.layout.main.show(this.layout);
    } 

  });

  Home.addInitializer(function() {
    Home.router = new Home.Router({ controller: new Home.Controller() });
  });

});