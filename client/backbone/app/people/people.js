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

      	this.sidebarView = new People.Views.SidebarView();
      	this.selectView = new People.Views.SelectView();
      	this.listView = new People.Views.ListView({ collection: this.people });

      	this.layout = new People.Views.Layout({ 
      			sidebar: this.sidebarView
      		, select: this.selectView 
      		, list: this.listView
      	});
      	this.layout.render();

				App.layout.main.show(this.layout);
      }

		,	index: function() {
				this.people.fetch();
			} 

		, search: function(q) {
			  // 
			} 

	});

	People.addInitializer(function() {
		new People.Router({ controller: new People.Controller() });
	});

});