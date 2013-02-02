Proof.module("Administration.Organisations.Models", function(Models, App, Backbone, Marionette, $, _, Paginator) {

  var SecuredCollection = App.Common.Models.SecuredCollection
    , Photos = App.Photos.Models.Photos
    , Roles = App.Security.Models.Roles
    , Role = App.Security.Models.Role;

  Models.Organisation = Backbone.ModelFactory({
    urlRoot: "/api/organisations"

  , defaults: {
      photos: []
    , roles: []
    }

  , initialize: function(attributes, options) {
      options || (options = {});
      this.init && this.init(attributes, options);

      var parent = { parent: { id: this.get("id"), name: "organisations" }};
      // this.photos = new Photos(this.get("photos"), parent);
      
      this.roles = new Roles(this.get("roles"), parent);
    }

  , markActive: function() {
      this.set("active", "active")
    }

  , isActive: function() {
      return this.get("active") === "active";
    }

  , addRole: function() {
      var role = new Role({ organisation: this.get("id") });
      this.roles.add(role);
      return role;
    }

  });

  Models.Organisations = SecuredCollection.extend({
    model: Models.Organisation

  , initialize: function(attributes, options) {
      options || (options = {});
      this.bind("error", this.defaultErrorHandler, this);
      this.bind("reset", function() {
        this.setPage(this.page);
      }, this);
      this.init && this.init(attributes, options);
    }

  , clearActive: function() {
      _.each(this.origModels, function(model) { 
        model.set("active", ""); 
      });
    }

  , active: function() {
      var active = _.filter(this.origModels, function(model) {
        return model.isActive(); 
      });
      if (active.length > 0) return _(active).first();
    }

  , setPage: function(page) {
      this.page = page;
      _.each(this.origModels, function(model) { 
        model.set("page", page);
      });
    }

  , filter: function(words) {
      this.setFilter([ "description" ], words);
      this.pager();
    }

  , paginator_core: {
      type      : "GET"
    , dataType  : "json"
    , url       : "/api/organisations"
    }

  });

}, Backbone.Paginator);