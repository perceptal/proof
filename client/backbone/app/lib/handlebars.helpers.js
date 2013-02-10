$(function() {

  i18n.init({
    ns: { 
      namespaces: [ "main", "help" ]
    , defaultNs: "main" 
    } 
  , cookieName: "locale"
  , preload: [ "en" ]
  , fallbackLng: "en"
  , getAsync: false
  });

  i18n.addPostProcessor("capitalize", function(value, key, options) {
    return value.capitalize();
  });

  i18n.addPostProcessor("titleize", function(value, key, options) {
    return value.titleize();
  });

  i18n.addPostProcessor("lower", function(value, key, options) {
    return value.toLowerCase();
  });

  i18n.addPostProcessor("upper", function(value, key, options) {
    return value.toUpperCase();
  });

  Handlebars.registerHelper("t", function(key, post) {
    return new Handlebars.SafeString(i18n.t(key, post ? { postProcess: post } : {}));
  });

  Handlebars.registerHelper("formatEmail", function(email) {
    if (email === undefined) return "";
    return email.replace(".", " dot ").replace("@", " at ");
  });

  Handlebars.registerHelper("include", function(template, options) {
    var partial = Handlebars.partials[template]
      , context = _.extend({}, this, options.hash);
     
    return new Handlebars.SafeString(partial(context));
  });

  Handlebars.registerHelper("markdown", function(text) {
    var converter = new Showdown.converter();
    return new Handlebars.SafeString(converter.makeHtml(i18n.t(text)));
  });

  Handlebars.registerHelper("formattags", function(tags) {
    var index = tags.length
      , output = "";

    while(index--) {
      output += ("<span class='label label-info'>" + tags[index] + "</span>&nbsp;");
    }

    return new Handlebars.SafeString(output);
  });

  Handlebars.registerHelper("options", function(data, value, options) {
    var items = data.split(" ")
      , buffer = "";

    for (var i = 0, j = items.length; i < j; i++) {
      buffer += options.fn({ opt: items[i], value: value });
    }

    return buffer;
  });

  Handlebars.registerHelper("option", function(option) {
    var opt = option.opt
      , value = option.value
      , selected = "";

    if ((opt || "").toLowerCase() === (value || "").toLowerCase()) selected = "selected";

    return new Handlebars.SafeString("<option id='" + opt + "' " + selected + ">" + i18n.t(opt) + "</option>");
  });
});