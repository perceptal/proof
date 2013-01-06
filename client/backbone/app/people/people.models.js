Proof.module("People.Models", function(People, App, Backbone, Marionette, $, _) {

	People.Person = Backbone.Model.extend({
		defaults: {
				firstName: "John"
			, lastName: "Doe"
		}
	});

	People.People = Backbone.Collection.extend({
		model: People.Person

	});

});