Proof.module("Home", function(Home, App, Backbone, Marionette, $, _) {

  Home.Router = Marionette.AppRouter.extend({
    appRoutes: {
      ""              : "index"
    , "home"          : "index"
    }
  });

  Home.Controller = Marionette.Controller.extend({

    select: function() {
      App.vent.trigger("section:change", "home");
    }

  , index: function() {
      this.select();

      this.asideView = new Home.Views.AsideView();
      this.navigationView = new Home.Views.NavigationView();

      this.layout = new Home.Views.Layout();
      this.layout.attachViews({ 
        aside: this.asideView
      , navigation: this.navigationView
      });
      this.layout.render();

      App.layout.main.show(this.layout);
    } 

  });

  Home.addInitializer(function() {
    Home.router = new Home.Router({ controller: new Home.Controller() });
  });

});