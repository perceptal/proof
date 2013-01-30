Proof.module("Models", function(Models, App, Backbone, Marionette, $, _) {

  Models.Help = Backbone.Model.extend({});

	Models.Message = Backbone.Model.extend({
		defaults: {
			type  : "error"
    , yes   : "general.yes"
    , no    : "general.no"
		}

  , initialize: function(attributes, options) {
      var type = attributes.type || this.defaults.type;
      this.set("icon", this.icon(type));
      this.set("color", this.color(type));
      this.set("heading", this.heading(type, attributes.heading));

      this.init && this.init(attributes, options);
    }

  , icon: function(type) {
      var icons = {
        error: "ban-circle"
      , exclamation: "exclamation-sign"
      , info: "info-sign"
      , question: "info-question-sign"
      }
      return "icon-" + icons[type];
    }

  , isError: function() {
      return this.get("type") === "error";
    }

  , isQuestion: function() {
      return this.get("type") === "question";
    }

  , color: function(type) {
      return type === "question" ? "error" : type;
    }

  , heading: function(type, heading) {
      if (heading) {
        return heading;
      } else {
        if (type === "question") {
          return i18n.t("general.are_you_sure");
        }
      };
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