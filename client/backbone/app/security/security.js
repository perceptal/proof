Proof.module("Security", function(Security, App, Backbone, Marionette, $, _) {
  
  Security.Router = Marionette.AppRouter.extend({
    appRoutes: {
    }
  });

  Security.Controller = Marionette.Controller.extend({

    initialize: function() {
    }

  });

  Security.addInitializer(function() {
    Security.router = new Security.Router({ controller: new Security.Controller() });
  });
});