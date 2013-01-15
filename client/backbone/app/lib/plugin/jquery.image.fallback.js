(function ($) {
  $.fn.fallback = function(options) {

    var defaults = {
      preLoad: function(img) { $(img).hide() }
    , onLoad: function(img) { $(img).fadeIn(200); }
    , fallback: null
    };

    var options = $.extend(defaults, options);

    return this.each(function () {
      if (!this.complete) {
        options.preLoad(this);
        $(this)
          .error(function() { $(this).attr("src", $(this).data("fallback") || options.fallback); })
          .load(function() { options.onLoad(this); });
      }
      else options.onLoad(this);
    });
  };
})($);
