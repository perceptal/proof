_.extend(Backbone.Validation.callbacks, {
  
  valid: function(view, attr, selector) {
    var control = view.$("[" + selector + "=" + attr + "]")
      , group = control.parents(".control-group");
    
    if (control.data("error-style") === "tooltip") {
      if (control.data("tooltip")) control.tooltip("hide");
    }
    else if (control.data("error-style") === "inline") {
      group.find(".help-inline.error-message").remove();
    }
    else {
      group.find(".help-block.error-message").remove();
    }

    group.removeClass("error");
  }

, invalid: function(view, attr, error, selector) {
    var control = view.$("[" + selector + "=" + attr + "]")
      , group = control.parents(".control-group")
      , message = group.find("label").text().capitalize() + " " + i18n.t(error);

    group.addClass("error");

    if (control.data("error-style") === "tooltip") {
      
      var position = control.data("tooltip-position") || "right";
      
      control.tooltip({
        placement: position
      , trigger: "manual"
      , animation: false
      , title: message
      });

      control.tooltip("show");
    }
    else if (control.data("error-style") === "inline") {
      if (group.find(".help-inline").length === 0) {
        group.find("label").append("<span class='help-inline error-message'></span>");
      }

      var target = group.find(".help-inline");
      target.text(message);
    }
    else {
      if (group.find(".help-block").length === 0) {
        group.find(".controls").append("<p class='help-block error-message'></p>");
      }

      var target = group.find(".help-block");
      target.text(message);
    }
  }
});