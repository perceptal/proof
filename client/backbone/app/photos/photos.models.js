Proof.module("Photos.Models", function(Models, App, Backbone, Marionette, $, _, Paginator) {

  Models.Photo = Backbone.ModelFactory({
  });

  Models.Photos = Backbone.Collection.extend({
    model: Models.Photo

  , initialize: function(attributes, options) {
      options || (options = {});
      // this.bind("error", this.defaultErrorHandler, this);
      this.init && this.init(attributes, options);

      this.parent = options.parent;
    }

  , url: function() {
      return "/api/" + this.parent.name + "/" + this.parent.id + "/photos";
    }
  });

}, Backbone.Paginator);
