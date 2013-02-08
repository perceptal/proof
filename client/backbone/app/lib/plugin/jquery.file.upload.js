$.fn.customiseFileInput = function() {
  return $(this).each(function() {
   
  var upload = $("<div class='customfile'></div>")
    , uploadButton = $("<span class='customfile-button' aria-hidden='true'>Browse...</span>").appendTo(upload)
    , uploadFeedback = $("<span class='customfile-feedback' aria-hidden='true'>No file selected</span>").appendTo(upload);

  var fileInput = $(this).addClass("customfile-input")
    .mouseover(function() {
      upload.addClass("customfile-hover");
    })

    .mouseout(function() {
      upload.removeClass("customfile-hover");
    })

    .focus(function() {
      upload.addClass("customfile-focus");
      fileInput.data("val", fileInput.val());
    })

    .blur(function() {
      upload.removeClass("customfile-focus");
      $(this).trigger("checkChange");
    })

    .bind("disable", function() {
      fileInput.attr("disabled", true);
      upload.addClass("customfile-disabled");
    })

    .bind("enable", function() {
      fileInput.removeAttr("disabled");
      upload.removeClass("customfile-disabled");
    })

    .bind("checkChange", function() {
      if (fileInput.val() && fileInput.val() !== fileInput.data("val")) {
        fileInput.trigger("change");
      }
    })

    .bind("change", function() {
      
      var filename = $(this).val().split(/\\/).pop()  
        , ext = "customfile-ext-" + filename.split(".").pop().toLowerCase();
      
      uploadFeedback.text(filename) 
        .removeClass(uploadFeedback.data("ext") || "") 
        .addClass(ext) 
        .data("ext", ext)
        .addClass("customfile-feedback-populated");
      
      uploadButton.text("Change...");

    })

    .click(function() { //for IE and Opera, make sure change fires after choosing a file, using an async callback
      fileInput.data("val", fileInput.val());
      setTimeout(function() {
        fileInput.trigger("checkChange");
      }, 100);
    });

    if (fileInput.is("[disabled]")) {
      fileInput.trigger("disable");
    }

    upload.mousemove(function(e) {
      fileInput.css({
        "left": e.pageX - upload.offset().left - fileInput.outerWidth() + 20
      , "top": e.pageY - upload.offset().top - $(window).scrollTop() - 3
      });
    }).insertAfter(fileInput);

    fileInput.appendTo(upload);
  });
};
