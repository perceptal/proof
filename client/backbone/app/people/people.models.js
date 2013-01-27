Proof.module("People.Models", function(Models, App, Backbone, Marionette, $, _, Paginator) {

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
      this.photos = new App.Photos.Models.Photos(this.get("photos"), parent);
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
    }
	});

	Models.People = App.Common.Models.Collection.extend({
		model: Models.Person

	, initialize: function(attributes, options) {
      options || (options = {});
      this.bind("error", this.defaultErrorHandler, this);
      this.bind("reset", function() {
        this.setPage(this.page);
      }, this);
      this.init && this.init(attributes, options);
    }

  , defaultErrorHandler: function(model, error) {
	    if (error.status === 403) {
	    	App.vent.trigger("security:unauthorised", this);
	    }
    }

  , clearActive: function() {
      _.each(this.origModels, function(model) { 
        model.set("active", ""); 
      });
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

  , sort: function(property) {
      var direction = "asc";
      if (property === this.sortColumn) direction = this.sortDirection === "asc" ? "desc" : "asc";
      this.setSort(property, direction);
    }

  , paginator_core: {
      type      : "GET"
    , dataType  : "json"
    , url       : "/api/people"
    }

  , paginator_ui: {
      perPage   : 10
    , pagesInRange: 1
    }

  , pages: function() {  

      var getClass = function(current, p) {
        if (current === p) return "active";
      }

      var that = this, p = [];

      if (this.information) {
        // _.each(this.information.pageSet, function(i) {
        _.each(_.range(1, this.information.totalPages+1), function(i) {
          p.push({ number: i, className: getClass(that.currentPage, i) });
        });
      }

      return p;
    }
	});

}, Backbone.Paginator);