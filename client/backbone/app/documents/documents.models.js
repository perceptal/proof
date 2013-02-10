Proof.module("Documents.Models", function(Models, App, Backbone, Marionette, $, _) {

  var SecuredCollection = App.Common.Models.SecuredCollection
    , SecuredModel = App.Common.Models.SecuredModel;

  Models.Document = SecuredModel.extend({ 
    
    initialize: function(attributes, options) {
      var type = attributes.type;
      this.set("icon", this.icon(type));

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
        options.data = { owner: this.get("owner"), title: this.get("title") };
      }

      return this._super(method, model, options);
    }

  , icon: function(type) {
      var icons = {
        pdf: "adobe-pdf"
      , doc: "ms-word"
      , xls: "ms-excel"
      , docx: "ms-word"
      , xlsx: "ms-excel"
      , txt: "file"
      , zip: "zip-file"
      , tar: "zip-file"
      , htm: "html5"
      , html: "html5"
      , undefined: "file"
      }
      return "icon-" + icons[type];
    }

  , setFile: function(file) {
      this.file = file;
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

});
