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
      App.vent.trigger("section:change", "people");
    }

  , reset: function() {
      this.people = new People.Models.People();    
      App.vent.on("security:signedout", this.reset, this);
      App.vent.on("security:unauthorised", this.reset, this);
   }

  , initialize: function() {
      this.reset();
    }

	,	index: function() {
      this.select();

			var promise = this.people.fetch();

    	this.asideView = new People.Views.AsideView();
    	this.navigationView = new People.Views.NavigationView();
    	this.selectorView = new People.Views.SelectorView({ collection: this.people });

    	this.layout = new People.Views.Layout();
    	this.layout.attachViews({ 
  			aside: this.asideView
  		, navigation: this.navigationView 
  		, selector: this.selectorView
      , temp: new People.Views.TempView()
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