Proof.module("Photos.Models", function(Models, App, Backbone, Marionette, $, _) {

  var SecuredCollection = App.Common.Models.SecuredCollection
      , SecuredModel = App.Common.Models.SecuredModel;

  Models.Photo = SecuredModel.extend({ 
    urlRoot: function() {
      return "/api/" + this.parent.name + "/" + this.parent.id + "/photos";
    }

  , sync: function(method, model, options) {
      var that = this;

      if (method === "create") {
        options.iframe = true;
        options.files = this.file;
        options.data = { owner: this.get("owner"), caption: this.get("caption") };
      }

      return this._super(method, model, options);
    }

  , setFile: function(file) {
      this.file = file;
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
