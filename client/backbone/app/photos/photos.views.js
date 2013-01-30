Proof.module("Photos.Views", function(Views, App, Backbone, Marionette, $, _) {

  Views.ItemView = Marionette.ItemView.extend({
    template: "photos/item"

  , tagName: "figure"

  , className: "photo"

  , events: {
      "click a.delete": "onDelete"
    , "click a.default": "onDefault"
    }

  , onDelete: function(e) {
      e.preventDefault();

      var destroy = _.bind(function() {
        this.model.destroy();
        App.vent.trigger("message:clear");
        App.vent.trigger("message:show", { type: "info", text: i18n.t("photos.deleted") });
      }, this);

      App.vent.trigger("message:clear");
      App.vent.trigger("message:show", { type: "question", text: i18n.t("photos.delete"), confirm: destroy });
    }

  , onDefault: function(e) {
      e.preventDefault();
    }

  });

  Views.EmptyView = Marionette.ItemView.extend({
    template: "photos/empty"

  });

  Views.ListView = Marionette.CollectionView.extend({

    itemView: Views.ItemView

  , emptyView: Views.EmptyView

  , initialize: function() {
      this.collection.bind("change", this.render, this.collection);
      this.collection.bind("reset", this.render, this.collection);
    }
  });

});
