Proof.module("Person.Views", function(Views, App, Backbone, Marionette, $, _) {

  Views.AsideView = Marionette.ItemView.extend({
    template: "person/aside"

  , initialize: function() {
      this.model.on("change", this.render, this);
    }
  });

  Views.EditView = Marionette.View.extend({

  });

  Views.Layout = Marionette.Layout.extend({
    template: "people/layout"

  , regions: {
        "navigation":     "#top"
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