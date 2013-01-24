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
    }

  , onDefault: function(e) {
      e.preventDefault();
    }

  });

  Views.ListView = Marionette.CollectionView.extend({

    itemView: Views.ItemView

  , initialize: function() {
      this.collection.bind("reset", this.render, this.collection);
    }
  });

});
