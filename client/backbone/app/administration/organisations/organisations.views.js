Proof.module("Administration.Organisations.Views", function(Views, App, Backbone, Marionette, $, _) {

  var FormView = App.Common.Views.FormView
    , FilterView = App.Common.Views.FilterView
    , MenuView = App.Common.Views.MenuView
    , SelectorView = App.Common.Views.SelectorView;

  Views.InfoView = FormView.extend({
    template: "administration/organisations/info"

  , ui: {
      description     : "input#description"
    , code            : "input#code"
    }

  , messages: {
      error           : "organisations.info"
    }

  , initialize: function() {
      this.autoSave = true;
      this.model.on("change", this.render, this);
    }
  });

  Views.SummaryView = Marionette.ItemView.extend({
    template: "administration/organisations/summary"

  , initialize: function(options) {
      this.model.on("change", this.render, this);
    }

  , onRender: function() {
      this.$(".image img").fallback({ fallback: "/img/group.png" });
    }

  });

  Views.FilterView = FilterView.extend({
    template: "administration/organisations/filter"

  , section: "organisations"

  , defaultSortField: "description"

  });

  Views.MenuView = MenuView.extend({
    template: "administration/organisations/menu"

  , section: "organisations"

  , defaultAction: "role"
  
  });

  Views.ItemView = Marionette.ItemView.extend({
    tagName: "li"
    
  , template: "administration/organisations/item"

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
      
      App.vent.trigger("organisations:selected", this.collection.get(id), page, url);
    }
  });

  Views.NoItemsView = Marionette.ItemView.extend({
    template: "administration/organisations/empty"

  });

  Views.SelectorView = SelectorView.extend({

    template: "administration/organisations/selector"

  , itemView: Views.ItemView

  , emptyView: Views.NoItemsView

  , section: "organisations"
  });

  Views.Layout = Marionette.Layout.extend({
    template: "administration/organisations/layout"

  , regions: {
        "filter":         "#filter"
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