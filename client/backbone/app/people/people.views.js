Proof.module("People.Views", function(Views, App, Backbone, Marionette, $, _) {

  var PagingView = App.Views.PagingView
    , Region = Marionette.Region
    , FormView = App.Common.Views.FormView;

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

  Views.FilterView = Marionette.ItemView.extend({
    template: "people/filter"

  , ui: {
      filter: "input#search"
    , refresh: "button.refresh"
    , sort: "a.sort"
    }

  , events: {
      "click button.refresh"  : "onRefresh"
    , "keyup input#search"    : "onFilter"
    , "click a.sort"          : "onSort"
    }

  , onRender: function() {
      this.delegateEvents();
      this.setSort("asc");
    }

  , setSort: function(direction) {
      this.ui.sort.find("small").remove();
      var icon = "icon-caret-" + (direction === "asc" ? "up" : "down");
      this.ui.sort.filter("[data-sort='" + (this.collection.sortColumn || "firstName") + "']")
        .append($("<small>&nbsp;<i class='icon " + icon + "'></i></small>"));
    }

  , onFilter: function(e) {
      this.collection.filter(this.ui.filter.val());

      if (this.collection.length === 1 && this.model !== this.collection.first()) {
        var first = this.collection.first();

        this.collection.clearActive();
        first.markActive();

        App.vent.trigger("people:selected", first);
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
      this.setSort(this.collection.sortDirection);
    }
  });

  Views.MenuView = Marionette.ItemView.extend({
    template: "people/menu"

  , ui: {
      links: "a"
    , name: "a.brand"
    , actions: "ul.action a"
    }

  , events: {
      "click a": "onNavigate"
    }

  , initialize: function(options) {
      this.page = options.page;

      if (this.model) this.model.on("change", this.render, this);
    }

  , onRender: function() {
      this.delegateEvents();
      this.select(this.page);

      App.vent.on("people:navigate", function(page, action) {
        this.select(page, action);
      }, this);
   }

  , select: function(page, action) {
      this.page = page;

      this.ui.actions.parent().hide();
      this.ui.links.parent().removeClass("active");

      if (this.model) {  
        var link = this.ui.links.filter("[data-page='" + this.page + "']");

        link.parent().addClass("active");

        this.ui.actions.filter("[data-page='" + (link.data("action") || "photo") + "']").parent().show();
      } else {

        this.ui.links
          .attr("href", "")
          .parent()
            .removeClass("active")
            .addClass("disabled");
        this.ui.name.hide();
      }
     }

  , onNavigate: function(e) {
      e.preventDefault();

      if (this.model == null) return false;

      var page = $(e.currentTarget).data("page")
        , url = $(e.currentTarget).attr("href");

      this.select(page);

      App.vent.trigger("people:navigate", page, url);
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
      this.collection.setPage(options.page);
      App.vent.on("people:navigate", this.collection.setPage, this.collection);

      this.collection.on("reset", this.render, this);
      this.collection.on("change", this.render, this);
  	}

  , onRender: function() {
      this.showPagination();
      this.padList();
    }

  , showPagination: function() {
      if (this.pagination) this.pagination.reset();
      this.pagination = new Region({ el: ".pagination" });
      this.pagination.show(new PagingView({ model: this.collection }));
    }

  , padList: function() {
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