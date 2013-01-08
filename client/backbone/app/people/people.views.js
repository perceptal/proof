Proof.module("People.Views", function(Views, App, Backbone, Marionette, $, _) {

	Views.SidebarView = Marionette.ItemView.extend({
	    template: "people/sidebar"

	});

	Views.SelectView = Marionette.ItemView.extend({
	    template: "people/select"

	});

	Views.ItemView = Marionette.ItemView.extend({
	    template: "people/item"

	});

	Views.ListView = Marionette.CollectionView.extend({

		  itemView: Views.ItemView

	  , initialize: function(options) {
	  		this.collection = options.collection;
	  		this.collection.on("all", this.render, this);
	  	}

	});

	Views.Layout = Marionette.Layout.extend({
			template: "people/layout"

		, regions: {
			    "sidebar": 		"#sidebar"
			  , "navigation": "#select"
			  , "list": 			"#list"
			}

	  , initialize: function(options) {
	  		this.sidebarView = options.sidebar;
	  		this.selectView = options.select;
	  		this.listView = options.list;
	  	}

	  , onRender: function() {
	  		this.sidebar.show(this.sidebarView);
	  		this.navigation.show(this.selectView);
	  		this.list.show(this.listView);
	  	}

	});

});