Proof.module("Person.Views", function(Views, App, Backbone, Marionette, $, _) {

  Views.SidebarView = Marionette.ItemView.extend({
    template: "person/sidebar"

  , initialize: function() {
      this.model.on("change", this.render, this);
    }
  });

  Views.SelectView = Marionette.ItemView.extend({
    template: "people/select"

  });

  Views.SummaryView = Marionette.ItemView.extend({
    template: "people/item"

  , initialize: function() {
      this.model.on("change", this.render, this);
    }

  });

  Views.EditView = Marionette.View.extend({

  });

  Views.Layout = Marionette.Layout.extend({
    template: "app/layout/edit"

  , regions: {
        "sidebar":    "#sidebar"
      , "select":     "#select"
      , "summary":    "#summary"
      , "edit":       "#edit"
    }

  , attachViews: function(views) {
      if (views.sidebar != null) this.sidebarView = views.sidebar;
      if (views.select != null) this.selectView = views.select;
      if (views.summary != null) this.summaryView = views.summary;
      if (views.edit != null) this.editView = views.edit;
    }

  , onRender: function() {
      this.sidebar.show(this.sidebarView);
      this.select.show(this.selectView);
      this.summary.show(this.summaryView);
      this.edit.show(this.editView);
    }

  });

});