Proof.module("People", function(People, App, Backbone, Marionette, $, _) {

	People.Router = Marionette.AppRouter.extend({
		appRoutes: {
      	"people"           : "index"
      , "people/search/:q" : "search"
		}
	});

	People.Controller = Marionette.Controller.extend({

      initialize: function() {
      	this.people = new People.Models.People();
      	this.listView = new People.Views.PersonListView({ collection: this.people });
      }

		,	index: function() {
				this.people.fetch();
			} 

		, search: function(q) {
			  // 
			} 

	});

	People.addInitializer(function() {
		var controller = new People.Controller();
		
		new People.Router({
			controller: controller
		});

	});

});