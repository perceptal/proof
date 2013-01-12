Proof.module("Models", function(Models, App, Backbone, Marionette, $, _) {

	Models.Message = Backbone.Model.extend({
		defaults: {
			type: "error"
		}
	});

  Models.App = Backbone.Model.extend({

  });

});