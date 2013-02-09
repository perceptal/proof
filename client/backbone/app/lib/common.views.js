Proof.module("Common.Views", function(Views, App, Backbone, Marionette, $, _) {

  Views.FormView = Marionette.ItemView.extend({
    tagName: "form"
  , className: "box"

  , initialize: function(options) {
      this.model.on("change", this.render, this);
    }

  , events: {
      "keypress input"          : "onKeypress"
    , "change   input"          : "onChangeInput"
    , "change   select"         : "onChangeSelect"
    , "click    button#save"    : "onSave"
    }

  , onRender: function() {
      this.delegateEvents();
      
      if (this.ui.selects) this.ui.selects.select2({ minimumResultsForSearch: 9999 });

      this.setFocus();
    }

  , setFocus: function() {
      if (this.focus) this.ui[this.focus].focus();
    }

  , onKeypress: function(e) {
      if (e.keyCode === 13) this.onChange(e);
    }

  , onChangeInput: function(e) {
      var prop = e.currentTarget.id
        , field = this.ui[prop]
        , value = field.val();

      if (field.attr("type") === "file") return;

      this.onChange(prop, field, value);
    }

  , onChangeSelect: function(e) {
      var prop = e.currentTarget.id
        , field = this.ui[prop]
        , value = field.find(":selected").attr("id");

      this.onChange(prop, field, value);
    }

  , onChange: function(prop, field, value) {
      var previous = this.model.get(prop);
      
      this.model.off("change", this.render, this);    // Remove change event to ensure focus fires

      this.model.set(prop, value);
      
      if (this.model.isValid(true)) {
        if (this.autoSave) {
          this.save(
            function(model) { model.set(prop, value); }
          , function(model) { model.set(prop, previous); }
          );
        }
      } else {
        this.model.set(prop, previous);
      }
      
      this.model.on("change", this.render, this);   // Rebind change event
    }

    , onSave: function(e) {
        e.preventDefault();
        
        var save = this.ui.save;

        if (this.model.isValid(true)) {
          save.button("loading");
          this.save(_(this.afterSave).bind(this), function() { save.button("reset"); });
        };
      }

    , save: function(success, fail, always) {
        var model = this.model
          , messages = this.messages;
        
        this.model.save()  
          .success(function() {
            if (success) success(model); 
            App.vent.trigger("message:clear");
          })
          
          .fail(function() {
            if (fail) fail(model);
            App.vent.trigger("message:show", i18n.t("error." + messages.error));
          })
          
          .always(function() {
            if (always) always(model);
          });
        
        return false;
      }
  });

  Views.UploadView = Views.FormView.extend({
    save: function(success, fail) {

      this.model.setFile(this.ui.file);

      return this._super(success, fail);
    }
  });

});