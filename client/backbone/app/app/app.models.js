Proof.module("Models", function(Models, App, Backbone, Marionette, $, _) {

  Models.Help = Backbone.Model.extend({});

	Models.Message = Backbone.Model.extend({
		defaults: {
			type: "error"
		}

  , initialize: function(attributes, options) {
      this.set("icon", this.icon(attributes.type || this.defaults.type));
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

  , isError: function() {
      return this.get("type") === "error";
    }
	});

  Models.Messages = Backbone.Collection.extend({
    model: Models.Message

  , hasErrors: function() {
      return _(this.models).filter(function(model) { return model.isError(); }).length > 0;
    }

  , clearNonErrors: function() {
      this.models = _(this.models).reject(function(model) { return !model.isError(); });
    }

  });

});