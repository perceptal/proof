Proof.module("People.Views", function(Views, App, Backbone, Marionette, $, _) {

  var FormView = App.Common.Views.FormView
    , FilterView = App.Common.Views.FilterView
    , MenuView = App.Common.Views.MenuView
    , SelectorView = App.Common.Views.SelectorView;

  Views.InfoView = FormView.extend({
    template: "people/info"

  , ui: {
      firstName     : "input#firstName"
    , lastName      : "input#lastName"
    , telephone     : "input#telephone"
    , email         : "input#email"
    , gender        : "select#gender"
    , title         : "select#title"
    , selects       : "select"
    }

  , messages: {
      error: "people.info"
    }

  , initialize: function() {
      this.autoSave = true;
      this.model.on("change", this.render, this);
    }
  });

  Views.SummaryView = Marionette.ItemView.extend({
    template: "people/summary"

  , initialize: function(options) {
      this.model.on("change", this.render, this);
    }

  , onRender: function() {
      this.$(".image img").fallback({ fallback: "/img/noprofile.png" });
    }

  });

  Views.FilterView = FilterView.extend({
    template: "people/filter"

  , section: "people"

  , defaultSortField: "firstName"

  });


  Views.MenuView = MenuView.extend({
    template: "people/menu"

  , section: "people"

  , defaultAction: "photo"
  
  });

	Views.ItemView = Marionette.ItemView.extend({
    tagName: "li"
  	
  , template: "people/item"

  , events: {
      "click .item": "onSelect"
    }

  , initialize: function(options) {
      this.model.on("change", this.render, this);
    }

  , onSelect: function(e) {
      e.preventDefault();

      this.collection.clearActive();
      this.model.markActive();

      var $link = $(e.currentTarget)
        , url = $link.attr("href")
        , id = $link.data("id")
        , page = $link.data("page");
      
      App.vent.trigger("people:selected", this.collection.get(id), page, url);
    }
	});

  Views.NoItemsView = Marionette.ItemView.extend({
    template: "people/empty"

  });

	Views.SelectorView = SelectorView.extend({

    template: "people/selector"

	, itemView: Views.ItemView

  , emptyView: Views.NoItemsView

  , section: "people"

	});

	Views.Layout = Marionette.Layout.extend({
		template: "people/layout"

	, regions: {
		    "filter": 		    "#filter"
		  , "aside":          "#aside"
      , "selector":       "#selector"
      , "menu":           "#menu"
      , "inner":          "#inner"
		}

  , initialize: function(views) {
  		if (views.aside != null) this.asideView = views.aside;
      if (views.filter != null) this.filterView = views.filter;
      if (views.selector != null) this.selectorView = views.selector;
      if (views.menu != null) this.menuView = views.menu;
      if (views.inner != null) this.innerView = views.inner;
  	}

  , onRender: function() {
  		this.aside.show(this.asideView);
  		this.filter.show(this.filterView);
      this.selector.show(this.selectorView);
      if (this.menuView) this.menu.show(this.menuView);
      if (this.innerView) this.inner.show(this.innerView);
    }

	});

});