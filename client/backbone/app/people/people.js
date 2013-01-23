Proof.module("People", function(People, App, Backbone, Marionette, $, _) {

	People.Router = Marionette.AppRouter.extend({
		appRoutes: {
    	"people"           	        : "index"
    , "people/search/:q" 	        : "search"
    , "people/new"                : "new"

    , "people/:id"                : "show"
    , "people/:id/photos"         : "show"
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
    }

	,	index: function() {
      var that = this;

      this.selectMenu();

      this.person = null;

			this.people.fetch()
        .success(function() { 
          that.people.pager(); 
        });

      this.constructLayout(new People.Views.HelpView(), new People.Views.EditView(), new People.Views.EditView());
		} 

  , show: function(id) {
      var that = this;

      this.selectMenu();

      this.person = new People.Models.Person({ id: id });

      this.people.fetch()
        .success(function() {
          that.people.pager();
          that.person = that.people.get(id);
          that.person.set("active", "active");
        });

      this.constructLayout(
        new People.Views.SummaryView({ model: this.person }), 
        new People.Views.MenuView({ model: this.person }),
        new People.Views.EditView({ model: this.person }));
    }

	, search: function(q) {
		  // 
		} 

	, "new": function() {
      this.index();
	 }

  , constructLayout: function(aside, menu, edit) {
      var filter = new People.Views.FilterView({ collection: this.people, model: this.person })
        , selector = new People.Views.SelectorView({ collection: this.people, selected: this.person });

      this.layout = new People.Views.Layout({
        aside:      aside
      , filter:     filter 
      , selector:   selector
      , menu:       menu
      , inner:      edit
      });

      this.layout.render();

      App.layout.main.show(this.layout);

    }

  , selectPerson: function(person) {
      if (this.layout == null) return;
 
      this.person = person;

      this.layout.filter.currentView.model = this.person;

      this.layout.menu.show(new People.Views.MenuView({ model: this.person }));
      this.layout.aside.show(new People.Views.SummaryView({ model: this.person }));
      this.layout.inner.show(new People.Views.EditView({ model: this.person }));
    }

	});

	People.addInitializer(function() {
		People.router = new People.Router({ controller: new People.Controller() });
	});

});