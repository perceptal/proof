Proof.module("Home", function(Manager, App, Backbone, Marionette, $, _) {

  var HelpView = App.Views.HelpView
    , Layout = Manager.Views.Layout
    , NavigationView = Manager.Views.NavigationView
    , SummaryView = Manager.Views.SummaryView;

  Manager.Router = Marionette.AppRouter.extend({
    appRoutes: {
      ""              : "index"
    , "home"          : "index"
    }
  });

  Manager.Controller = Marionette.Controller.extend({

    selectMenu: function() {
      App.vent.trigger("section:change", "home");
    }

  , index: function() {
      this.selectMenu();

      this.layout = new Layout({
        aside: new HelpView({ section: "home" })
      , navigation: new NavigationView()
      , summary: new SummaryView({ model: App.Global.currentUser })
      });
      this.layout.render();

      App.layout.main.show(this.layout);
    } 

  });

  Manager.addInitializer(function() {
    Manager.router = new Manager.Router({ controller: new Manager.Controller() });
  });

});