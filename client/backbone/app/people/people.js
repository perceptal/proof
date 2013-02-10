Proof.module("People", function(Manager, App, Backbone, Marionette, $, _) {

  var SECTION = "people";

  var People = Manager.Models.People
    , Person = Manager.Models.Person
    , HelpView = App.Views.HelpView
    , MenuView = Manager.Views.MenuView
    , SelectorView = Manager.Views.SelectorView
    , FilterView = Manager.Views.FilterView
    , SummaryView = Manager.Views.SummaryView
    , InfoView = Manager.Views.InfoView
    , PhotoListView = App.Photos.Views.ListView
    , PhotoUploadView = App.Photos.Views.UploadView
    , DocumentListView = App.Documents.Views.ListView
    , DocumentUploadView = App.Documents.Views.UploadView
    , Layout = Manager.Views.Layout;

	Manager.Router = Marionette.AppRouter.extend({
		appRoutes: {
    	"people"           	        : "index"
    , "people/search/:q" 	        : "search"
    , "people/new"                : "new"

    , "people/:id"                : "show"
    , "people/:id/"               : "show"
    , "people/:id/:page"          : "page"
		}
	});

	Manager.Controller = Marionette.Controller.extend({

    selectMenu: function() {
      App.vent.trigger("section:change", SECTION);
    }

  , reset: function() {
      this.people = new People();
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

      var active = this.people.active();
      if (active) {
        Manager.router.navigate(SECTION + "/" + active.get("id"), true);
      } else {
        this.constructLayout(
          new HelpView({ section: SECTION })
        , new MenuView({ model: this.person, page: "" }));

        App.vent.trigger("message:show", { type: "info", text: i18n.t("people.not_selected") });
      }
		} 

  , show: function(id) {
      this.constructPersonLayout(id, "info");
    }

  , page: function(id, page) {
      this.constructPersonLayout(id, page);
    }

	, search: function(q) {
		  // 
		} 

	, "new": function() {
      this.index();
	 }

  , loadPerson: function(id) {
      var that = this
        , found = false;

      this.person = new Person({ id: id });

      this.people.fetch()
        .success(function() {
          that.people.setSort("firstName", "asc");
          that.people.goTo(1);
          
          found = that.person.copyFrom(that.people.get(id));
          
          while (!found) {
            that.people.nextPage();
            found = that.person.copyFrom(that.people.get(id));
          }
          that.person.markActive();
          that.person.setupDefaultPhoto();
          that.people.markActive(that.person.get("id"));
        });
    }

  , constructPersonLayout: function(id, page) {
      this.selectMenu();
      this.loadPerson(id);
      this.constructLayout(
        new SummaryView({ model: this.person })
      , new MenuView({ model: this.person, page: page })
      , this.getPersonView(page)
      , page);
    }

  , constructLayout: function(aside, menu, inner, page) {
      var filter = new FilterView({ collection: this.people, model: this.person })
        , selector = new SelectorView({ collection: this.people, page: page });

      App.vent.trigger("message:clear");

      this.layout = new Layout({
        aside:      aside
      , filter:     filter 
      , selector:   selector
      , menu:       menu
      , inner:      inner
      });

      this.layout.render();

      App.layout.main.show(this.layout);
    }

  , selectPerson: function(person, page, url) {
      if (this.layout == null) return;

      Manager.router.navigate(url, false);
 
      App.vent.trigger("message:clear");

      this.person = person;
      this.person.setupDefaultPhoto();

      this.layout.filter.currentView.model = this.person;

      this.layout.menu.show(new MenuView({ model: this.person, page: page || "info" }));
      this.layout.aside.show(new SummaryView({ model: this.person }));
      this.layout.inner.show(this.getPersonView(page));
    }

  , selectPersonPage: function(page, url) {
      if (this.layout == null) return; 

      Manager.router.navigate(url, false);

      App.vent.trigger("message:clear");

      this.layout.inner.show(this.getPersonView(page));
    }

  , getPersonView: function(page) {
      switch(page) {

        case "permissions":
          break;

        case "accounts":
          break;

        case "documents":
          this.person.documents.fetch();
          return new DocumentListView({ collection: this.person.documents });

        case "document":
          var view = new DocumentUploadView({ model: this.person.addDocument(), section: SECTION });
          Backbone.Validation.bind(view); // TODO Move this
          return view;

        case "photos":
          this.person.photos.fetch();
          return new PhotoListView({ collection: this.person.photos });

        case "photo":
          var view = new PhotoUploadView({ model: this.person.addPhoto(), section: SECTION });
          Backbone.Validation.bind(view); // TODO Move this
          return view;

        case "info":
        default:
          var view = new InfoView({ model: this.person });
          Backbone.Validation.bind(view); // TODO Move this
          return view;
      }
    }
	});

	Manager.addInitializer(function() {
		Manager.router = new Manager.Router({ controller: new Manager.Controller() });
	});

});