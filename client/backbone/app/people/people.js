Proof.module("People", function(People, App, Backbone, Marionette, $, _) {

	People.Router = Marionette.AppRouter.extend({
		appRoutes: {
    	"people"           	: "index"
    , "people/search/:q" 	: "search"
    , "people/new"				: "new"
		}
	});

	People.Controller = Marionette.Controller.extend({

    select: function() {
      App.vent.trigger("section:changed", "people");
    }

  , initialize: function() {
    	this.people = new People.Models.People();
    }

	,	index: function() {
      this.select();

			var promise = this.people.fetch();

    	this.sidebarView = new People.Views.SidebarView();
    	this.selectView = new People.Views.SelectView();
    	this.listView = new People.Views.ListView({ collection: this.people });

    	this.layout = new People.Views.Layout();
    	this.layout.attachViews({ 
  			sidebar: this.sidebarView
  		, select: this.selectView 
  		, list: this.listView
    	});
    	this.layout.render();

			App.layout.main.show(this.layout);
		} 

	, search: function(q) {
		  // 
		} 

	, "new": function() {
      this.index();
	 }

	});

	People.addInitializer(function() {
		People.router = new People.Router({ controller: new People.Controller() });
	});

});