Proof.module("People.Views", function(Views, App, Backbone, Marionette, $, _) {

	Views.PersonView = Backbone.Marionette.ItemView.extend({
	    template: "people/item"

	});

	Views.PersonListView = Backbone.Marionette.CollectionView.extend({

		  itemView: Views.PersonView

		, el: "#list"

	  , initialize: function(options) {
	  		this.collection = options.collection;
	  		this.collection.on("reset", this.render, this);
	  	}

	});

});