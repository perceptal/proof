Proof.module("Administration.Organisations", function(Manager, App, Backbone, Marionette, $, _) {

  var SECTION = "administration";

  var Organisations = Manager.Models.Organisations
    , Organisation = Manager.Models.Organisation
    , HelpView = App.Views.HelpView
    , MenuView = Manager.Views.MenuView
    , SelectorView = Manager.Views.SelectorView
    , FilterView = Manager.Views.FilterView
    , SummaryView = Manager.Views.SummaryView
    , InfoView = Manager.Views.InfoView
    , AddRoleView = Manager.Views.AddRoleView
    , SecurityView = Manager.Views.SecurityView
    , PhotoListView = App.Photos.Views.ListView
    , PhotoUploadView = App.Photos.Views.UploadView
    , DocumentListView = App.Documents.Views.ListView
    , DocumentUploadView = App.Documents.Views.UploadView
    , Layout = Manager.Views.Layout;

  Manager.Router = Marionette.AppRouter.extend({
    appRoutes: {
      "administration"                                  : "index"
    , "administration/organisations"                    : "index"
    , "administration/organisations/search/:q"          : "search"
    , "administration/organisations/new"                : "new"

    , "administration/organisations/:id"                : "show"
    , "administration/organisations/:id/"               : "show"
    , "administration/organisations/:id/:page"          : "page"
    }
  });

  Manager.Controller = Marionette.Controller.extend({

    selectMenu: function() {
      App.vent.trigger("section:change", SECTION);
    }

  , reset: function() {
      this.organisations = new Organisations();
      this.organisation = null;

      App.vent.on("security:signedout", this.reset, this);
      App.vent.on("security:unauthorised", this.reset, this);
   }

  , initialize: function() {
      this.reset();

      App.vent.on("organisations:selected", this.selectOrganisation, this);
      App.vent.on("organisations:navigate", this.selectOrganisationPage, this);
    }

  , index: function() {
      var that = this;

      this.selectMenu();

      this.organisation = null;

      this.organisations.fetch()
        .success(function(data) {
          that.organisations.setSort("description", "asc"); 
          that.organisations.goTo(1);
        });

      var active = this.organisations.active();
      if (active) {
        Manager.router.navigate("administration/organisations/" + active.get("id"), true);
      } else {
        this.constructLayout(
          new HelpView({ section: SECTION })
        , new MenuView({ model: this.organisation, page: "" }));

        App.vent.trigger("message:show", { type: "info", text: i18n.t("organisations.not_selected") });
      }
    } 

  , show: function(id) {
      this.constructOrganisationLayout(id, "info");
    }

  , page: function(id, page) {
      this.constructOrganisationLayout(id, page);
    }

  , search: function(q) {
      // 
    } 

  , "new": function() {
      this.index();
   }

  , loadOrganisation: function(id) {
      var that = this
        , found = false;

      this.organisation = new Organisation({ id: id });

      this.organisations.fetch()
        .success(function() {
          that.organisations.setSort("description", "asc");
          that.organisations.goTo(1);

          found = that.organisation.copyFrom(that.organisations.get(id));
          while (!found) {
            that.organisations.nextPage();
            found = that.organisation.copyFrom(that.organisations.get(id));
          }
          that.organisation.markActive();
          that.organisation.setupDefaultPhoto();
          that.organisations.markActive(that.organisation.get("id"));
        });
    }

  , constructOrganisationLayout: function(id, page) {
      this.selectMenu();
      this.loadOrganisation(id);
      this.constructLayout(
        new SummaryView({ model: this.organisation })
      , new MenuView({ model: this.organisation, page: page })
      , this.getOrganisationView(page)
      , page);
    }

  , constructLayout: function(aside, menu, inner, page) {
      var filter = new FilterView({ collection: this.organisations, model: this.organisation })
        , selector = new SelectorView({ collection: this.organisations, page: page });

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

  , selectOrganisation: function(organisation, page, url) {
      if (this.layout == null) return;

      Manager.router.navigate(url, false);
 
      App.vent.trigger("message:clear");

      this.organisation = organisation;
      this.organisation.setupDefaultPhoto();

      this.layout.filter.currentView.model = this.organisation;

      this.layout.menu.show(new MenuView({ model: this.organisation, page: page || "info" }));
      this.layout.aside.show(new SummaryView({ model: this.organisation }));
      this.layout.inner.show(this.getOrganisationView(page));
    }

  , selectOrganisationPage: function(page, url) {
      if (this.layout == null) return; 

      Manager.router.navigate(url, false);

      App.vent.trigger("message:clear");

      this.layout.inner.show(this.getOrganisationView(page));
    }

  , getOrganisationView: function(page) {
      switch(page) {

        case "security":
          this.organisation.roles.fetch();
          return new SecurityView({ collection: this.organisation.roles });

        case "role":
          var view = new AddRoleView({ model: this.organisation.addRole() });
          Backbone.Validation.bind(view); // TODO Move this
          return view;

        case "documents":
          this.organisation.documents.fetch();
          return new DocumentListView({ collection: this.organisation.documents });

        case "document":
          var view = new DocumentUploadView({ model: this.organisation.addDocument(), section: "organisations" });
          Backbone.Validation.bind(view); // TODO Move this
          return view;

        case "locations":
          break;

        case "location":
          break;

        case "photos":
          this.organisation.photos.fetch();
          return new PhotoListView({ collection: this.organisation.photos });

        case "photo":
          var view = new PhotoUploadView({ model: this.organisation.addPhoto(), section: "organisations" });
          Backbone.Validation.bind(view); // TODO Move this
          return view;

        case "info":
        default:
          var view = new InfoView({ model: this.organisation });
          Backbone.Validation.bind(view); // TODO Move this
          return view;
      }
    }
  });

  Manager.addInitializer(function() {
    Manager.router = new Manager.Router({ controller: new Manager.Controller() });
  });

});