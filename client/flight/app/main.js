requirejs.config({
  baseUrl             : "/"

, hbs: {
    templateExtension : "html"
  , disableI18n       : true
  }

, paths: {
    jquery            : "vendor/jquery/jquery"
  , underscore        : "vendor/lodash/lodash"
  , es5shim           : "vendor/es5-shim/es5-shim"
  , es5sham           : "vendor/es5-shim/es5-sham"
  , bootstrap         : "bootstrap/js/bootstrap"
  , inflection        : "vendor/inflection/inflection"
  , handlebars        : "vendor/requirejs-handlebars-plugin/handlebars"
  , hbs               : "vendor/requirejs-handlebars-plugin/hbs"
  }

});
