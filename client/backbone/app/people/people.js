Proof.module("People", function(People, App, Backbone, Marionette, $, _) {

	People.Router = Marionette.AppRouter.extend({
		appRoutes: {
    	"people"           	: "index"
    , "people/search/:q" 	: "search"
    , "people/new"        : "new"
    , "people/:id"        : "show"
		}
	});

	People.Controller = Marionette.Controller.extend({

    select: function() {
      App.vent.trigger("section:change", "people");
    }

  , reset: function() {
      this.people = new People.Models.People();
      this.person = null;

      App.vent.on("security:signedout", this.reset, this);
      App.vent.on("security:unauthorised", this.reset, this);
   }

  , initialize: function() {
      this.reset();

      App.vent.on("people:selected", this.selectPerson, this);
    }

	,	index: function() {
      this.select();

			this.people.fetch();
      this.person = null;

      this.constructLayout(new People.Views.HelpView(), new People.Views.EditView());
		} 

  , show: function(id) {
      var that = this;

      this.select();

      this.person = new People.Models.Person({ id: id });

      this.people.fetch()
        .success(function() {
          that.person = that.people.get(id);
          that.person.set("active", "active");
        });

      this.constructLayout(new People.Views.SummaryView({ model: this.person }), new People.Views.EditView());
    } 

	, search: function(q) {
		  // 
		} 

	, "new": function() {
      this.index();
	 }

  , constructLayout: function(asideView, contentView) {
      var navigationView = new People.Views.NavigationView()
        , selectorView = new People.Views.SelectorView({ collection: this.people, selected: this.person });

      this.layout = new People.Views.Layout({
        aside:      asideView
      , navigation: navigationView 
      , selector:   selectorView
      , content:    contentView
      });

      this.layout.render();

      App.layout.main.show(this.layout);

    }

  , selectPerson: function(person) {
      if (this.layout == null) return;
 
      this.person = person;

      this.layout.aside.show(new People.Views.SummaryView({ model: this.person }));
    }

	});

	People.addInitializer(function() {
		People.router = new People.Router({ controller: new People.Controller() });
	});

});