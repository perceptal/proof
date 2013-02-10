Proof.module("Photos.Views", function(Views, App, Backbone, Marionette, $, _) {

  var FormView = App.Common.Views.FormView
    , UploadView = App.Common.Views.UploadView;

  Views.ItemView = Marionette.ItemView.extend({
    template: "photos/item"

  , tagName: "figure"

  , className: "photo"

  , events: {
      "click img": "onShow"
    , "click a.delete": "onDelete"
    , "click a.default": "onDefault"
    }

  , onDelete: function(e) {
      e.preventDefault();

      var destroy = _.bind(function() {
        this.model.destroy();

        App.vent.trigger("message:clear");
        App.vent.trigger("message:show", { type: "info", text: i18n.t("photos.deleted") });
      }, this);

      App.vent.trigger("message:clear");
      App.vent.trigger("message:show", { type: "question", text: i18n.t("photos.delete"), confirm: destroy });
    }

  , onDefault: function(e) {
      e.preventDefault();

      var owner = this.model.parent.model
      owner.set("defaultPhoto", this.model.get("id"));
      owner.save();
    }

  , onShow: function(e) {
      if (e === undefined) return;
      this.trigger("show", $(e.currentTarget).data("image"));
    }

  });

  Views.EmptyView = Marionette.ItemView.extend({
    template: "photos/empty"

  });

  Views.ListView = Marionette.CompositeView.extend({

    template: "photos/container"

  , itemViewContainer: "#photos"

  , itemView: Views.ItemView

  , emptyView: Views.EmptyView

  , ui: {
      dialog: "#photo-modal"
    , image: "#photo-modal img"
    }

  , initialize: function() {
      this.collection.bind("change", this.render, this.collection);
      this.collection.bind("reset", this.render, this.collection);

      this.on("itemview:show", this.showDialog);
    }

  , showDialog: function(child, url) {
      this.ui.image.attr("src", url);

      this.ui.dialog.reveal({
        animation: "fade"
      , animationspeed: 300
      , closeonbackgroundclick: true
      });
    }
  });

  Views.UploadView = UploadView.extend({
    template: "photos/upload"

  , ui: {
      caption         : "input#caption"
    , file            : "input#file"
    , save            : "button#save"
    }

  , messages: {
      error           : "photos.upload"
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
      App.vent.trigger(this.section + ":navigate", "photos", this.section + "/" + photo.get("owner") + "/photos");
    }
  });

});
