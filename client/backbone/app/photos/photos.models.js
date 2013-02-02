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
    }

  , addPhoto: function(organisation) {
      var photo = new Models.Photo({}, { parent: this.parent });
      this.add(photo);
      return photo;
    }

  , paginator_core: {
      type      : "GET"
    , dataType  : "json"
    , url       : function() {
        return "/api/" + this.parent.name + "/" + this.parent.id + "/photos"
      }
    }
  });

});
