Proof.module("Documents.Views", function(Views, App, Backbone, Marionette, $, _) {

  Views.ItemView = Marionette.ItemView.extend({

  });


  Views.ListView = Marionette.CollectionView.extend({

    itemView: Views.ItemView

  });

});
