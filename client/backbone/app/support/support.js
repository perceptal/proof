Proof.module("Support", function(Manager, App, Backbone, Marionette, $, _) {

  var HelpView = App.Views.HelpView
    , Layout = Manager.Views.Layout
    , NavigationView = Manager.Views.NavigationView;

  Manager.Router = Marionette.AppRouter.extend({
    appRoutes: {
      "support" : "index"
    }
  });

  Manager.Controller = Marionette.Controller.extend({

    selectMenu: function() {
      App.vent.trigger("section:change", "support");
    }

  , index: function() {
      this.selectMenu();

      this.layout = new Layout({
        aside: new HelpView({ section: "support" })
      , navigation: new NavigationView()
      });
      this.layout.render();

      App.layout.main.show(this.layout);
    } 

  });

  Manager.addInitializer(function() {
    Manager.router = new Manager.Router({ controller: new Manager.Controller() });
  });

});