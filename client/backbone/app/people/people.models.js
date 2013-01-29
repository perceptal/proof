Proof.module("People.Models", function(Models, App, Backbone, Marionette, $, _, Paginator) {

  var SecuredCollection = App.Common.Models.SecuredCollection
    , Photos = App.Photos.Models.Photos;

	Models.Person = Backbone.ModelFactory({
		urlRoot: "/api/people"

  , defaults: {
      photos: []
    , documents: []
    }

  , initialize: function(attributes, options) {
      options || (options = {});
      this.init && this.init(attributes, options);

      var parent = { parent: { id: this.get("id"), name: "people" }};
      this.photos = new Photos(this.get("photos"), parent);
    }

  , markActive: function() {
      this.set("active", "active")
    }

  , isActive: function() {
      return this.get("active") === "active";
    }

  , validation: {
      firstName: {
        required: true
      , msg: "validation:required"
      }
    , lastName: {
        required: true
      , msg: "validation:required"
      }
    , email: {
        required: false
      , pattern: "email"
      , msg: "validation:invalid"
      }
    }
	});

	Models.People = SecuredCollection.extend({
		model: Models.Person

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
      this.setFilter([ "firstName", "lastName" ], words);
      this.pager();
    }

  , paginator_core: {
      type      : "GET"
    , dataType  : "json"
    , url       : "/api/people"
    }

	});

}, Backbone.Paginator);