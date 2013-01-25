Proof.module("People.Views", function(Views, App, Backbone, Marionette, $, _) {

  Views.InfoView = Marionette.ItemView.extend({
    template: "people/info"

  , tagName: "form"
  , className: "box"

  , ui: {
      "firstName"    : "input#firstName"
    , "lastName"     : "input#lastName"
    }

  , initialize: function(options) {
      this.model.on("change", this.render, this);
    }

  , events: {
      "keypress input"          : "onKeypress"
    , "change   input"          : "onChange"
    }

  , onRender: function() {
      this.delegateEvents();
      Backbone.Validation.bind(this);
    }
  
  , onKeypress: function(e) {
      if (e.keyCode === 13) this.onChange(e);
    }

  , onChange: function(e) {
      var model = this.model
        , prop = e.currentTarget.id
        , field = this.ui[prop]
        , value = field.val()
        , previous = this.model.get(prop);
      
      this.model.off("change", this.render, this);    // Remove change event to ensure focus fires

      this.model.set(prop, value);
      
      if (this.model.isValid(true)) {
        this.model.save()  
          .success(function() {
            model.set(prop, value);
          })
          
          .fail(function() {
            model.set(prop, previous);
            App.vent.trigger("message:show", i18n.t("error:people.info"));
          })

          .always(function() {
            model.on("change", this.render, this);    // Rebind change event
          });
      } else {
        this.model.set(prop, previous);
      }
    }
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

  , events: {
      "click button.refresh"  : "onRefresh"
    , "keyup input#search"    : "onFilter"
    , "click a.sort"          : "onSort"
    }

  , onRender: function() {
      this.delegateEvents();
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
        this.collection.first.set("active", "active");
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
      this.delegateEvents();
      this.select(this.page);
    }

  , select: function(page) {
      this.page = page;
      this.ui.links.parent().removeClass("active");
      this.ui.links.filter("[data-page='" + this.page + "']").parent().addClass("active");
    }

  , onNavigate: function(e) {
      e.preventDefault();

      var page = $(e.currentTarget).data("page");
      this.select(page);
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

      this.collection.setPage(options.page);
      App.vent.on("people:navigate", this.collection.setPage, this.collection);

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