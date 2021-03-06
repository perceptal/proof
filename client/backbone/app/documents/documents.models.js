Proof.module("Documents.Models", function(Models, App, Backbone, Marionette, $, _) {

  var SecuredCollection = App.Common.Models.SecuredCollection
    , SecuredModel = App.Common.Models.SecuredModel;

  Models.Document = SecuredModel.extend({ 
    
    initialize: function(attributes, options) {
      var extension = attributes.extension;
      this.set("icon", this.icon(extension));

      this.init && this.init(attributes, options);
    }

  , urlRoot: function() {
      return "/api/" + this.parent.name + "/" + this.parent.id + "/documents";
    }

  , sync: function(method, model, options) {
      var that = this;

      if (method === "create") {
        options.iframe = true;
        options.files = this.file;
        options.data = { 
          owner : this.get("owner")
        , title : this.get("title")
        , tags  : this.get("tags") 
        };
      }

      return this._super(method, model, options);
    }

  , icon: function(extension) {
      var icons = {
        pdf: "adobe-pdf"
      , doc: "ms-word"
      , docx: "ms-word"
      , txt: "ms-word"
      , rtf: "ms-word"
      , csv: "ms-excel"
      , xls: "ms-excel"
      , xlsx: "ms-excel"
      , zip: "zip-file"
      , tar: "zip-file"
      , htm: "html5"
      , html: "html5"
      , gif: "picture"
      , jpeg: "picture"
      , jpg: "picture"
      , png: "picture"
      , mp4: "video"
      , mov: "video"
      , swf: "video"
      , m4v: "video"
      , mp3: "music"
      , wav: "music"
      , undefined: "file"
      }

      return "icon-" + (icons[extension] || "file");
    }

  , setFile: function(file) {
      this.file = file;
    }

  , validation: {
      title: {
        required: true
      , msg: "validation.required"
      }
    }
  });

  Models.Documents = SecuredCollection.extend({
    model: Models.Document

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
        return "/api/" + this.parent.name + "/" + this.parent.id + "/documents"
      }
    }
  });

  Models.Tags = {
    fetch: function() {
      var promise = $.ajax({
        url: "/api/documents/tags"
      , dataType: "json"
      });

      return promise;
    }
  }
});
