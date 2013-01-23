Proof.module("People.Views", function(Views, App, Backbone, Marionette, $, _) {

  Views.EditView = Marionette.ItemView.extend({
    template: "people/edit"

  });

  Views.HelpView = Marionette.ItemView.extend({
    template: "people/help"

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

  Views.FilterView = Marionette.ItemView.extend({
    template: "people/filter"

  , events: {
      "click input#search": "onFilter"
    }

  , ui: {
      filter: "input#search"
    , refresh: "button.refresh"
    }

  , onRender: function() {
      var that = this;

      this.ui.filter.bind("keyup", function() {
        if (that.timeout) clearTimeout(that.timeout);
        that.timeout = setTimeout($.proxy(that.onFilter, that), 100);
      });

      // Shouldn't be necessary
      this.ui.refresh.bind("click", $.proxy(this.onRefresh, this));
    }

  , onFilter: function(e) {
      this.collection.filter(this.ui.filter.val());

      if (this.collection.length === 1 && this.model !== this.collection.first()) {
        App.vent.trigger("people:selected", this.collection.first());
      }
    }

  , onRefresh: function(e) {
      e.preventDefault();
      this.ui.filter.val("");
      this.collection.filter("");
    }

  , onSort: function(e) {
      e.preventDefault();

    }
  });

  Views.MenuView = Marionette.ItemView.extend({
    template: "people/menu"

  , initialize: function(options) {
      this.model.on("change", this.render, this);
    }
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

      this.collection.each(function(item) { item.set("active", ""); });
      this.model.set("active", "active");

      var url = $(e.currentTarget).attr("href")
        , id = $(e.currentTarget).data("id");
      
      App.People.router.navigate(url);
      App.vent.trigger("people:selected", this.collection.get(id));
    }
	});

  Views.NoItemsView = Marionette.ItemView.extend({
    template: "people/empty"
  });

	Views.SelectorView = Marionette.CompositeView.extend({

    template: "people/selector"

  , itemViewContainer: "ul.list"

	, itemView: Views.ItemView

  , emptyView: Views.NoItemsView

  , ui: {
      pagination      : "div.pagination"
    }

  , itemViewOptions: function(model) {
      return {
        collection: this.collection
      };
    }

  , initialize: function(options) {
      this.selected = options.selected;

      this.collection.on("reset", this.render, this);
      this.collection.on("change", this.render, this);
  	}

  , onRender: function() {
      if (this.pagination) this.pagination.reset();
      this.pagination = new Marionette.Region({ el: ".pagination" });
      this.pagination.show(new App.Views.PagingView({ model: this.collection }));
    }
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
      this.menu.show(this.menuView);
      this.inner.show(this.innerView);
    }

	});

});