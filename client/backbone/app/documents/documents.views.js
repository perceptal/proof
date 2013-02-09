Proof.module("Documents.Views", function(Views, App, Backbone, Marionette, $, _) {

  var FormView = App.Common.Views.FormView
    , UploadView = App.Common.Views.UploadView;

  Views.ItemView = Marionette.ItemView.extend({
    template: "documents/item"

  , events: {
      "click a.delete": "onDelete"
    }

  , onDelete: function(e) {
      e.preventDefault();

      var destroy = _.bind(function() {
        this.model.destroy();
        App.vent.trigger("message:clear");
        App.vent.trigger("message:show", { type: "info", text: i18n.t("documents.deleted") });
      }, this);

      App.vent.trigger("message:clear");
      App.vent.trigger("message:show", { type: "question", text: i18n.t("documents.delete"), confirm: destroy });
    }

  });

  Views.EmptyView = Marionette.ItemView.extend({
    template: "documents/empty"

  });

  Views.ListView = Marionette.CollectionView.extend({

    itemView: Views.ItemView

  , emptyView: Views.EmptyView

  , initialize: function() {
      this.collection.bind("change", this.render, this.collection);
      this.collection.bind("reset", this.render, this.collection);
    }
  });


  Views.UploadView = UploadView.extend({
    template: "documents/upload"

  , ui: {
      caption         : "input#caption"
    , file            : "input#file"
    , save            : "button#save"
    }

  , messages: {
      error           : "documents.upload"
    }

  , initialize: function(options) {
      this.autoSave = false;
      this.focus = "caption";
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
