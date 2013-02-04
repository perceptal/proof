Proof.module("Administration.Organisations.Models", function(Models, App, Backbone, Marionette, $, _, Paginator) {

  var SecuredCollection = App.Common.Models.SecuredCollection
    , SecuredModel = App.Common.Models.SecuredModel
    , Photos = App.Photos.Models.Photos

  Models.Organisation = SecuredModel.extend({
    urlRoot: "/api/organisations"

  , defaults: {
      photos: []
    , roles: []
    }

  , initialize: function(attributes, options) {
      options || (options = {});
      this.init && this.init(attributes, options);

      var parent = { parent: { id: this.get("id"), name: "organisations" }};
      
      this.photos = new Photos(this.get("photos"), parent);
      this.roles = new Models.Roles(this.get("roles"), parent);
    }

  , markActive: function() {
      this.set("active", "active")
    }

  , isActive: function() {
      return this.get("active") === "active";
    }

  , addRole: function() {
      var role = new Models.Role({ organisation: this.get("id") });
      this.roles.add(role);
      return role;
    }

  , validation: {
      description: {
        required: true
      , msg: "validation:required"
      }
    , code: {
        required: true
      , msg: "validation:required"
      }
    , code: {
        pattern: "number"
      , msg: "validation:invalid"
      }
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

  , markActive: function(id) {
      _.invoke(
        _.filter(this.origModels, function(model) { return model.get("id") === id; })
      , "markActive"
      );
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
      dataType  : "json"
    , url       : "/api/organisations"
    }

  });

  Models.Role = SecuredModel.extend({ 

    urlRoot: function() {
      return "/api/" + this.parent.name + "/" + this.parent.id + "/roles";
    }

  , validation: {
      name: {
        required: true
      , msg: "validation:required"
      }
    }

  });

  Models.Roles = SecuredCollection.extend({
    model: Models.Role

  , initialize: function(attributes, options) {
      options || (options = {});
      this.bind("error", this.defaultErrorHandler, this);
      this.init && this.init(attributes, options);

      this.parent = options.parent;

      this.on("add", this.setParent, this);
      this.on("reset", function() { 
        _(this.models).each(_.bind(this.setParent, this));
      }, this);
    }

  , setParent: function(model) {
      model.parent = this.parent;
    }

  , paginator_core: {
      dataType  : "json"
    , url       : function() {
        return "/api/" + this.parent.name + "/" + this.parent.id + "/roles"
      }
    }

  });

}, Backbone.Paginator);