Proof.module("People.Views", function(Views, App, Backbone, Marionette, $, _) {

  Views.InfoView = Marionette.ItemView.extend({
    template: "people/info"

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

  , ui: {
      filter: "input#search"
    , refresh: "button.refresh"
    , sort: "a.sort"
    }

  , onRender: function() {
      var that = this;

      this.ui.filter.bind("keyup", function() {
        if (that.timeout) clearTimeout(that.timeout);
        that.timeout = setTimeout($.proxy(that.onFilter, that), 100);
      });

      // Shouldn't be necessary
      this.ui.refresh.bind("click", $.proxy(this.onRefresh, this));
      this.ui.sort.bind("click", $.proxy(this.onSort, this));

      this.setSort();
    }

  , setSort: function() {
      this.ui.sort.find("small").remove();
      var caret = "icon-caret-" + (this.collection.sortDirection === "asc" ? "up" : "down");
      this.ui.sort.filter("[data-sort='" + (this.collection.sortColumn || "firstName") + "']")
        .append($("<small>&nbsp;<i class='icon " + caret + "'></i></small>"));
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
      this.collection.sort($(e.currentTarget).data("sort"));
      this.setSort();
    }
  });

  Views.MenuView = Marionette.ItemView.extend({
    template: "people/menu"

  , ui: {
      links: "a"
    }

  , events: {
      "click a": "onNavigate"
    }

  , initialize: function(options) {
      this.page = options.page;
      this.model.on("change", this.render, this);
    }

  , onRender: function() {
      this.select(this.page);

      // TODO shouldn't be necessary
      this.ui.links.bind("click", $.proxy(this.onNavigate, this));
    }

  , select: function(page) {
      this.page = page;
      this.ui.links.parent().removeClass("active");
      this.ui.links.filter("[data-page='" + this.page + "']").parent().addClass("active");
    }

  , onNavigate: function(e) {
      e.preventDefault();

      var page = $(e.currentTarget).data("page");
      this.select(page)
      App.People.router.navigate($(e.currentTarget).attr("href"), false);
      App.vent.trigger("people:navigate", page);
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
      // this.model.set("page", "info");
    }

  , onSelect: function(e) {
      e.preventDefault();

      this.collection.clearActive();
      this.model.set("active", "active");

      var $link = $(e.currentTarget)
        , url = $link.attr("href")
        , id = $link.data("id")
        , page = $link.data("page");
      
      App.People.router.navigate(url);
      App.vent.trigger("people:selected", this.collection.get(id), page);
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
    , list            : "ul.list"
    }

  , itemViewOptions: function(model) {
      return {
        collection: this.collection
      };
    }

  , initialize: function(options) {
      this.selected = options.selected;

      this.collection.each(function(model) { model.set("page", options.page); });

      this.collection.on("reset", this.render, this);
      this.collection.on("change", this.render, this);
  	}

  , onRender: function() {
      if (this.pagination) this.pagination.reset();
      this.pagination = new Marionette.Region({ el: ".pagination" });
      this.pagination.show(new App.Views.PagingView({ model: this.collection }));

      if (this.collection.length > 0 && this.collection.length < 10) {
        for(var i=0; i<(10-this.collection.length); i++)
          this.ui.list.append("<li class='empty'><a>&nbsp;</a></li>");
      }
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
      if (this.menuView) this.menu.show(this.menuView);
      if (this.innerView) this.inner.show(this.innerView);
    }

	});

});