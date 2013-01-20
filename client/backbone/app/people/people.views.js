Proof.module("People.Views", function(Views, App, Backbone, Marionette, $, _) {

	Views.SidebarView = Marionette.ItemView.extend({
	  template: "people/sidebar"

	});

	Views.SelectView = Marionette.ItemView.extend({
	  template: "people/select"

	});

	Views.ItemView = Marionette.ItemView.extend({
	  template: "people/item"

  , events: {
      "click article": "onSelect"
    }

  , initialize: function() {
      // this.model.on("change", this.render, this);
      // this.model.on("destroy", this.remove, this);
    }

  , onSelect: function(e) {
      var id = $(e.currentTarget).data("id");
      App.Person.router.navigate("people/" + id, true);
    }

	});

	Views.ListView = Marionette.CollectionView.extend({

	  itemView: Views.ItemView

  , initialize: function(options) {
  		this.collection = options.collection;
  		this.collection.on("all", this.render, this);
  	}

  , onRender: function() {
      this.$(".photo img").fallback();
    }

	});

	Views.Layout = Marionette.Layout.extend({
		template: "app/layout/list"

	, regions: {
		    "sidebar": 		"#sidebar"
		  , "navigation": "#select"
		  , "list": 			"#list"
		}

  , attachViews: function(views) {
  		if (views.sidebar != null) this.sidebarView = views.sidebar;
  		if (views.select != null) this.selectView = views.select;
  		if (views.list != null) this.listView = views.list;
  	}

  , onRender: function() {
  		this.sidebar.show(this.sidebarView);
  		this.navigation.show(this.selectView);
  		this.list.show(this.listView);
  	}

	});

});