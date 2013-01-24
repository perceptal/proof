Proof.module("People", function(People, App, Backbone, Marionette, $, _) {

	People.Router = Marionette.AppRouter.extend({
		appRoutes: {
    	"people"           	        : "index"
    , "people/search/:q" 	        : "search"
    , "people/new"                : "new"

    , "people/:id"                : "show"
    , "people/:id/"               : "show"
    , "people/:id/info"           : "show"
    , "people/:id/photos"         : "photos"
    , "people/:id/photos/new"     : "show"
    , "people/:id/documents"      : "show"
    , "people/:id/documents/new"  : "show"
		}
	});

	People.Controller = Marionette.Controller.extend({

    selectMenu: function() {
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
      App.vent.on("people:navigate", this.selectPersonPage, this);
    }

	,	index: function() {
      var that = this;

      this.selectMenu();

      this.person = null;

			this.people.fetch()
        .success(function() { 
          that.people.setSort("firstName", "asc"); 
          that.people.goTo(1);
        });

      this.constructLayout(new People.Views.HelpView());
		} 

  , show: function(id) {
      this.constructPersonLayout(id, "info");
    }

	, search: function(q) {
		  // 
		} 

	, "new": function() {
      this.index();
	 }

  , photos: function(id) {
      this.constructPersonLayout(id, "photos");
    }

  , loadPerson: function(id) {
      var that = this;

      this.person = new People.Models.Person({ id: id });

      this.people.fetch()
        .success(function() {
          that.people.setSort("firstName", "asc"); 
          that.people.goTo(1);
          that.person = that.people.get(id);
          while (that.person == null) {
            that.people.nextPage();
            that.person = that.people.get(id);
          }
          that.person.set("active", "active");
        });
    }

  , constructPersonLayout: function(id, page) {
      this.selectMenu();
      this.loadPerson(id);
      this.constructLayout(
        new People.Views.SummaryView({ model: this.person })
      , new People.Views.MenuView({ model: this.person, page: page })
      , this.getPersonView(page)
      , page);
    }

  , constructLayout: function(aside, menu, inner, page) {
      var filter = new People.Views.FilterView({ collection: this.people, model: this.person })
        , selector = new People.Views.SelectorView({ collection: this.people, selected: this.person, page: page });

      this.layout = new People.Views.Layout({
        aside:      aside
      , filter:     filter 
      , selector:   selector
      , menu:       menu
      , inner:      inner
      });

      this.layout.render();

      App.layout.main.show(this.layout);
    }

  , selectPerson: function(person, page) {
      if (this.layout == null) return;
 
      this.person = person;

      this.layout.filter.currentView.model = this.person;

      this.layout.menu.show(new People.Views.MenuView({ model: this.person, page: page }));
      this.layout.aside.show(new People.Views.SummaryView({ model: this.person }));
      this.layout.inner.show(this.getPersonView(page));
    }

  , selectPersonPage: function(page) {
      if (this.layout == null) return; 
      this.layout.inner.show(this.getPersonView(page));
    }

  , getPersonView: function(page) {
      switch(page) {
        case "photos":
          this.person.photos.fetch();
          return new App.Photos.Views.ListView({ collection: this.person.photos });

        case "info":
        default:
          return new People.Views.InfoView({ model: this.person });
      }
    }
	});

	People.addInitializer(function() {
		People.router = new People.Router({ controller: new People.Controller() });
	});

});