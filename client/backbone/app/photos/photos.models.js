Proof.module("Photos.Models", function(Models, App, Backbone, Marionette, $, _) {

  var SecuredCollection = App.Common.Models.SecuredCollection;

  Models.Photo = Backbone.ModelFactory({ 
    urlRoot: function() {
      return "/api/" + this.parent.name + "/" + this.parent.id + "/photos";
    }

  });

  Models.Photos = SecuredCollection.extend({
    model: Models.Photo

  , initialize: function(attributes, options) {
      options || (options = {});
      this.bind("error", this.defaultErrorHandler, this);
      this.init && this.init(attributes, options);

      this.parent = options.parent;

      this.on("add", this.setParent, this);
      this.on("reset", function() { 
        _(this.models).each(_.bind(this.setParent, this));
      }, this);
    }

  , setParent: function(model) {
      model.parent = this.parent;
    }

  , paginator_core: {
      dataType  : "json"
    , url       : function() {
        return "/api/" + this.parent.name + "/" + this.parent.id + "/photos"
      }
    }
  });

});
