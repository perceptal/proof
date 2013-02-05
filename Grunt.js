module.exports = function(grunt) {

	var app = "client/backbone/app/"
		, templates = [ 
				app + "**/templates/*.html"
			, app + "**/templates/**/*.html"
			, app + "**/**/templates/*.html"
			, app + "**/**/templates/**/*.html" 
			]
		, compiled = app + "templates/handlebars.js"
    , vendor = [ 
        "components/jquery/jquery.js"
      , "components/jquery.cookie/jquery.cookie.js"
      , "components/inflection/inflection.js"
      , "public/bootstrap/js/bootstrap.js"
      , "components/underscore/underscore.js"
      , "components/backbone/backbone.js"
      , "components/backbone.super/backbone.super.js"
      , "components/backbone.marionette/lib/backbone.marionette.js"
      , "components/backbone.iosync/backbone.iobind.js"
      , "components/backbone.paginator/lib/backbone.paginator.js"
      , "components/backbone.paginator/plugins/diacritic.js"
      , "components/backbone-validation/dist/backbone-validation.js"
      , "components/handlebars/handlebars-1.0.0-rc.1.js"
      , "components/select2/select2.js"
      , "components/showdown/showdown.js"
      ]
    , application = [
        app + "lib/plugin/jquery.image.fallback.js"
      , app + "lib/handlebars.helpers.js"
      , app + "templates/handlebars.js"
      , app + "lib/backbone.validation.bootstrap.js"
      , app + "lib/marionette.handlebars.js"
      , app + "app.js"
      , app + "lib/common.models.js"
      , app + "lib/common.views.js"
      , app + "security/security.models.js"
      , app + "security/security.views.js"
      , app + "security/security.views.authentication.js"
      , app + "security/security.js"
      , app + "app/app.models.js"
      , app + "app/app.views.js"
      , app + "app/app.views.common.js"
      , app + "home/home.views.js"
      , app + "home/home.js"
      , app + "support/support.views.js"
      , app + "support/support.js"
      , app + "photos/photos.models.js"
      , app + "photos/photos.views.js"
      , app + "administration/administration.js"
      , app + "administration/organisations/organisations.models.js"
      , app + "administration/organisations/organisations.views.js"
      , app + "administration/organisations/organisations.views.security.js"
      , app + "administration/organisations/organisations.js"
      , app + "people/people.models.js"
      , app + "people/people.views.js"
      , app + "people/people.js"
      , app + "app/app.global.js"
      ]
    , css = [ 
        "public/bootstrap/css/bootstrap.css"
      , "components/select2/select2.css"
      , "public/css/main.css"
      , "public/bootstrap/css/bootstrap-responsive.css"
      ]
		;

	grunt.loadNpmTasks("grunt-contrib-clean");
	grunt.loadNpmTasks("grunt-contrib-handlebars");
  grunt.loadNpmTasks("grunt-contrib-mincss");

	grunt.initConfig({

    pkg: "<json:package.json>"

  , min: {
      vendor: {
        src: vendor
      , dest: "public/js/vendor.min.js"
      }
    , app: {
        src: application
      , dest: "public/js/app.min.js"
      }
    }

  , mincss: {
      compress: {
        files: { 
          "public/css/build.min.css": css
        }
      }
    }

	, clean: [ compiled ]

  , watch: {
      templates: {
        files: templates
      , tasks: "handlebars"
      }
    , vendor: {
        files: vendor
      , tasks: "min"
      }
    , application: {
        files: application
      , tasks: "min"
      }
    , css: {
        files: css
      , tasks: "mincss"
      }
    }

  , handlebars: {
      compile: {
        options: {
          namespace: "Templates"
        , wrapped: true
	    	, processName: function(filename) {
	    			return filename
	    				.replace(app, "")
	    				.replace("templates/", "")
	    				.replace(".html", "");
	  			}
				, processPartialName: function(filename) { // input:  templates/_header.hbs
    				var pieces = filename.split("/");
    				return pieces[pieces.length - 1].substring(1).replace(".html", ""); // output: _header.hbs
  				}
        }
      , files: {
          "client/backbone/app/templates/handlebars.js": templates
        }
      }
    }
  });

  grunt.registerTask("default", [ "handlebars", "min", "mincss", "watch" ]);
};