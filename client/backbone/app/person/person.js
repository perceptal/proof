Proof.module("Person", function(Person, App, Backbone, Marionette, $, _) {

  Person.Router = Marionette.AppRouter.extend({
    appRoutes: {
      "people/:id"        : "show"
    }
  });

  Person.Controller = Marionette.Controller.extend({

    select: function() {
      App.vent.trigger("section:change", "people");
    }

  , reset: function() {
      this.people = new App.People.Models.People();    
      App.vent.on("security:signedout", this.reset, this);
      App.vent.on("security:unauthorised", this.reset, this);
   }

  , initialize: function() {
      this.reset();
    }

  , show: function(id) {
      this.select();

      this.person = new App.People.Models.Person({ id: id });
      this.person.fetch();
      this.people.fetch();

      this.asideView = new Person.Views.AsideView({ model: this.person });
      this.navigationView = new App.People.Views.NavigationView();
      this.selectorView = new App.People.Views.SelectorView({ collection: this.people, selected: this.person });

      this.layout = new Person.Views.Layout();
      this.layout.attachViews({ 
        aside: this.asideView
      , navigation: this.navigationView 
      , selector: this.selectorView
      , temp: new App.People.Views.TempView()
      });
      this.layout.render();

      App.layout.main.show(this.layout);
    } 

  });

  Person.addInitializer(function() {
    Person.router = new Person.Router({ controller: new Person.Controller() });
  });

});

