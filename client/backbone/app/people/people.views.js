Proof.module("People.Views", function(Views, App, Backbone, Marionette, $, _) {

  Views.TempView = Marionette.ItemView.extend({
    template: "people/temp"

  });

  Views.AsideView = Marionette.ItemView.extend({
    template: "people/aside"

  });

	Views.NavigationView = Marionette.ItemView.extend({
	  template: "people/navigation"

	});

	Views.ItemView = Marionette.ItemView.extend({
    tagName: "li"
  	
  , template: "people/item"

  , initialize: function(options) {
      this.selected = options.selected;
    }

  , onBeforeRender: function() {
      if (this.selected === this.model.get("id"))
        this.$el.addClass("active");
    }

	});

	Views.SelectorView = Marionette.CollectionView.extend({

    tagName: "ul"

	, itemView: Views.ItemView

  , itemViewOptions: function(model) {
      if (this.selected) var id = this.selected.get("id");

      return {
        selected: id
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

  , attachViews: function(views) {
  		if (views.aside != null) this.asideView = views.aside;
      if (views.navigation != null) this.navigationView = views.navigation;
      if (views.selector != null) this.selectorView = views.selector;
      if (views.temp != null) this.tempView = views.temp;
  	}

  , onRender: function() {
  		this.aside.show(this.asideView);
  		this.navigation.show(this.navigationView);
      this.selector.show(this.selectorView);
      this.content.show(this.tempView);
    }

	});

});