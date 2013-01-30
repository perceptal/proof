Proof.module("Administration.Organisations", function(Organisations, App, Backbone, Marionette, $, _) {

  var HelpView = App.Views.HelpView
    , Layout = App.Administration.Organisations.Views.Layout
    , NavigationView = App.Administration.Organisations.Views.NavigationView;

  Organisations.Router = Marionette.AppRouter.extend({
    appRoutes: {
      "administration"               : "index"
    , "administration/organisations" : "index"
    }
  });

  Organisations.Controller = Marionette.Controller.extend({

    selectMenu: function() {
      App.vent.trigger("section:change", "administration");
    }

  , index: function() {
      this.selectMenu();

      this.layout = new Layout({
        aside: new HelpView({ section: "administration" })
      , navigation: new NavigationView()
      });
      this.layout.render();

      App.layout.main.show(this.layout);
    } 

  });

  Organisations.addInitializer(function() {
    Organisations.router = new Organisations.Router({ controller: new Organisations.Controller() });
  });

});