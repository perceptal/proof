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
    }

  , onRender: function() {
      this.delegateEvents();
      
      if (this.ui.selects) this.ui.selects.select2({ minimumResultsForSearch: 9999 });
    }

  , onKeypress: function(e) {
      if (e.keyCode === 13) this.onChange(e);
    }

  , onChangeInput: function(e) {
      var prop = e.currentTarget.id
        , field = this.ui[prop]
        , value = field.val();

      this.onChange(prop, field, value);
    }

  , onChangeSelect: function(e) {
      var prop = e.currentTarget.id
        , field = this.ui[prop]
        , value = field.get(0).selectedOptions[0].id;

      this.onChange(prop, field, value);
    }

  , onChange: function(prop, field, value) {
      var model = this.model
        , previous = this.model.get(prop)
        , messages = this.messages;
      
      this.model.off("change", this.render, this);    // Remove change event to ensure focus fires

      this.model.set(prop, value);
      
      if (this.model.isValid(true)) {
        this.model.save()  
          .success(function() {
            model.set(prop, value);
            App.vent.trigger("message:clear");
          })
          
          .fail(function() {
            model.set(prop, previous);
            App.vent.trigger("message:show", i18n.t("error:" + messages.error));
          })

          .always(function() {
            model.on("change", this.render, this);    // Rebind change event
          });
      } else {
        this.model.set(prop, previous);
      }
    }
  });

});