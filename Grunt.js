module.exports = function(grunt) {

	var root = "client/backbone/app/"
		, templates = [ root + "**/templates/*.html", root + "**/templates/**/*.html" ]
		, compiled = root + "templates/handlebars.js";
		;

	grunt.loadNpmTasks("grunt-contrib-clean");
	grunt.loadNpmTasks("grunt-contrib-handlebars");
	grunt.loadNpmTasks("grunt-buildconcat");

	grunt.initConfig({

    pkg: "<json:package.json>"
    
	, clean: [ compiled ]

  , watch: {
      files: templates
    , tasks: "handlebars"
    }

  , handlebars: {
      compile: {
        options: {
          namespace: "Templates"
        , wrapped: true
	    	, processName: function(filename) {
	    			return filename
	    				.replace(root, "")
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

  grunt.registerTask("default", [ "handlebars", "watch" ]);
};