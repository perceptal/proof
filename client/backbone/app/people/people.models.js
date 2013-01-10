Proof.module("People.Models", function(People, App, Backbone, Marionette, $, _) {

	People.Person = Backbone.Model.extend({
		defaults: {
				firstName: "John"
			, lastName: "Doe"
		}

	, urlRoot: "/api/people"
	});

	People.People = Backbone.Collection.extend({
		model: People.Person

	, url: "/api/people"

	, initialize: function(attributes, options) {
      options || (options = {});
      this.bind("error", this.defaultErrorHandler);
      this.init && this.init(attributes, options);
    }

  , defaultErrorHandler: function(model, error) {
	    if (error.status === 403) {
	    	App.vent.trigger("authorization:failed", this);
	    }
    }
	});

});