$(function() {

  i18n.init({
    ns: { 
      namespaces: [ "main", "error", "validation" ]
    , defaultNs: "main" 
    } 
  , cookieName: "locale"
  , preload: [ "en", "fr", "de" ]
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

  Handlebars.registerHelper("selected", function(option, value) {
    if (value === undefined) return "";
    return option.toLowerCase() === value.toLowerCase() ? "selected" : "";
  });

  Handlebars.registerHelper("formatEmail", function(email) {
    if (email === undefined) return "";
    return email.replace(".", " dot ").replace("@", " at ");
  });

  Handlebars.registerHelper("include", function(template, options){
    var partial = Handlebars.partials[template]
      , context = _.extend({}, this, options.hash);
     
    return new Handlebars.SafeString(partial(context));
  });
});