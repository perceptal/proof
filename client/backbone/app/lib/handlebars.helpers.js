$(function() {

  i18n.init({
    ns: { 
      namespaces: [ "navigation" ]
    , defaultNs: "navigation" 
    } 
  , cookieName: "locale"
  , preload: [ "en", "fr", "de" ]
  , fallbackLng: "en"
  , getAsync: false
  });

  Handlebars.registerHelper("t", function(key) {
    return new Handlebars.SafeString(i18n.t(key));
  });

});