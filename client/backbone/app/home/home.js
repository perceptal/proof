Proof.module("Home", function(Home, App, Backbone, Marionette, $, _) {

  Home.Router = Marionette.AppRouter.extend({
    appRoutes: {
      ""              : "index"
    , "home"          : "index"
    }
  });

  Home.Controller = Marionette.Controller.extend({

    selectMenu: function() {
      App.vent.trigger("section:change", "home");
    }

  , index: function() {
      this.selectMenu();

      this.layout = new Home.Views.Layout({
        aside: new App.Views.HelpView({ section: "home" })
      , navigation: new Home.Views.NavigationView()
      });
      this.layout.render();

      App.layout.main.show(this.layout);
    } 

  });

  Home.addInitializer(function() {
    Home.router = new Home.Router({ controller: new Home.Controller() });
  });

});