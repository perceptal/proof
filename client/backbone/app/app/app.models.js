Proof.module("Models", function(Models, App, Backbone, Marionette, $, _) {

	Models.Message = Backbone.Model.extend({
		defaults: {
			type: "error"
		}

  , initialize: function(attributes, options) {
      this.set("icon", this.icon(attributes.type));
      this.init && this.init(attributes, options);
    }

  , icon: function(type) {
      var icons = {
        error: "ban-circle"
      , exclamation: "exclamation-sign"
      , info: "info-sign"
      }
      return "icon-" + icons[type];
    }
	});

});