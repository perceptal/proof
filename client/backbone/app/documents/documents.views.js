Proof.module("Documents.Views", function(Views, App, Backbone, Marionette, $, _) {

  var FormView = App.Common.Views.FormView
    , UploadView = App.Common.Views.UploadView;

  Views.ItemView = Marionette.ItemView.extend({
    template: "documents/item"

  , tagName: "tr"

  , events: {
      "click"           : "onDownload"
    , "click a.delete"  : "onDelete"
    }

  , onDelete: function(e) {
      e.preventDefault();
      e.stopPropagation();

      var destroy = _.bind(function() {
        this.model.destroy();
        App.vent.trigger("message:clear");
        App.vent.trigger("message:show", { type: "info", text: i18n.t("documents.deleted") });
      }, this);

      App.vent.trigger("message:clear");
      App.vent.trigger("message:show", { type: "question", text: i18n.t("documents.delete"), confirm: destroy });
    }

  , onDownload: function(e) {
      e.preventDefault();

      window.open("/api/documents/" + this.model.get("id") + "/download", "_blank");
    }

  });

  Views.EmptyView = Marionette.ItemView.extend({
    template: "documents/empty"

  , tagName: "tr"

  , className: "no-hover"
  });

  Views.ListView = Marionette.CompositeView.extend({

    template: "documents/container"

  , tagName: "table"

  , className: "table table-hover"

  , itemViewContainer: "tbody"

  , itemView: Views.ItemView

  , emptyView: Views.EmptyView

  , initialize: function() {
      this.collection.bind("change", this.render, this);
      this.collection.bind("reset", this.render, this);
    }
  });


  Views.UploadView = UploadView.extend({
    template: "documents/upload"

  , ui: {
      title           : "input#title"
    , file            : "input#file"
    , save            : "button#save"
    }

  , messages: {
      error           : "documents.upload"
    }

  , initialize: function(options) {
      this.autoSave = false;
      this.focus = "title";
      this.section = options.section;
    }

  , onRender: function() {
      this.ui.file.customiseFileInput();
      
      return this._super();
    }

  , afterSave: function(photo) {
      App.vent.trigger(this.section + ":navigate", "documents", this.section + "/" + photo.get("owner") + "/documents");
    }
  });

});
