Proof.module("People.Views", function(Views, App, Backbone, Marionette, $, _) {

  Views.EditView = Marionette.ItemView.extend({
    template: "people/temp"

  });

  Views.HelpView = Marionette.ItemView.extend({
    template: "people/help"

  });

  Views.SummaryView = Marionette.ItemView.extend({
    template: "people/summary"

  , initialize: function(options) {
      this.model = options.model;
      this.model.on("change", this.render, this);
    }

  , onRender: function() {
      this.$(".image img").fallback({ fallback: "/img/noprofile.png" });
    }

  });

	Views.NavigationView = Marionette.ItemView.extend({
	  template: "people/navigation"

	});

	Views.ItemView = Marionette.ItemView.extend({
    tagName: "li"
  	
  , template: "people/item"

  , events: {
      "click .item": "onSelect"
    }

  , initialize: function(options) {
      this.collection = options.collection;
      this.model.on("change", this.render, this);
    }

  , onSelect: function(e) {
      e.preventDefault();

      this.collection.each(function(item) { item.set("active", ""); });
      this.model.set("active", "active");

      var url = $(e.currentTarget).attr("href")
        , id = $(e.currentTarget).data("id");
      
      App.People.router.navigate(url);
      App.vent.trigger("people:selected", this.collection.get(id));
    }
	});

	Views.SelectorView = Marionette.CollectionView.extend({

    tagName: "ul"

	, itemView: Views.ItemView

  , itemViewOptions: function(model) {
      return {
        collection: this.collection
      };
    }

  , initialize: function(options) {
  		this.collection = options.collection;
      this.selected = options.selected;
      
      this.collection.on("all", this.render, this);
  	}

	});

	Views.Layout = Marionette.Layout.extend({
		template: "people/layout"

	, regions: {
		    "navigation": 		"#top"
		  , "aside":          "#aside"
      , "selector":       "#selector"
      , "content":        "#content"
		}

  , initialize: function(views) {
  		if (views.aside != null) this.asideView = views.aside;
      if (views.navigation != null) this.navigationView = views.navigation;
      if (views.selector != null) this.selectorView = views.selector;
      if (views.content != null) this.contentView = views.content;
  	}

  , onRender: function() {
  		this.aside.show(this.asideView);
  		this.navigation.show(this.navigationView);
      this.selector.show(this.selectorView);
      this.content.show(this.contentView);
    }

	});

});