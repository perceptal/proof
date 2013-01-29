Proof.module("Home", function(Home, App, Backbone, Marionette, $, _) {

  var HelpView = App.Views.HelpView
    , Layout = Home.Views.Layout
    , NavigationView = Home.Views.NavigationView;

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

      this.layout = new Layout({
        aside: new HelpView({ section: "home" })
      , navigation: new NavigationView()
      });
      this.layout.render();

      App.layout.main.show(this.layout);
    } 

  });

  Home.addInitializer(function() {
    Home.router = new Home.Router({ controller: new Home.Controller() });
  });

});