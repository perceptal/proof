Proof.module("Person", function(Person, App, Backbone, Marionette, $, _) {

  Person.Router = Marionette.AppRouter.extend({
    appRoutes: {
      "people/:id"        : "show"
    }
  });

  Person.Controller = Marionette.Controller.extend({

    select: function() {
      App.vent.trigger("section:changed", "people");
    }

  , initialize: function() {
    }

  , show: function(id) {
      this.select();

      this.person = new App.People.Models.Person({ id: id });
      var promise = this.person.fetch();

      this.sidebarView = new Person.Views.SidebarView({ model: this.person });
      this.selectView = new App.People.Views.SelectView();
      this.summaryView = new Person.Views.SummaryView({ model: this.person });
      this.editView = new Person.Views.EditView({ model: this.person });

      this.layout = new Person.Views.Layout();
      this.layout.attachViews({ 
        sidebar: this.sidebarView
      , select: this.selectView 
      , summary: this.summaryView
      , edit: this.editView
      });
      this.layout.render();

      App.layout.main.show(this.layout);
    } 

  });

  Person.addInitializer(function() {
    Person.router = new Person.Router({ controller: new Person.Controller() });
  });

});

