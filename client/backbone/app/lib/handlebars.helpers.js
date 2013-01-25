$(function() {

  i18n.init({
    ns: { 
      namespaces: [ "navigation", "error", "validation" ]
    , defaultNs: "navigation" 
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

});