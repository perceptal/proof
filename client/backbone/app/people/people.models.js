Proof.module("People.Models", function(People, App, Backbone, Marionette, $, _, Paginator) {

	People.Person = Backbone.ModelFactory({
		urlRoot: "/api/people"
	});

	People.People = Paginator.clientPager.extend({
		model: People.Person

	, initialize: function(attributes, options) {
      options || (options = {});
      this.bind("error", this.defaultErrorHandler);
      this.init && this.init(attributes, options);
    }

  , defaultErrorHandler: function(model, error) {
	    if (error.status === 403) {
	    	App.vent.trigger("security:unauthorised", this);
	    }
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

  , paginator_ui: {
      firstPage     : 1
    , currentPage   : 1
    , perPage       : 10
    , totalPages    : 10
    , pagesInRange  : 4
    }
	});

}, Backbone.Paginator);