module.exports = function(grunt) {

	var root = "client/backbone/app/"
		, templates = [ root + "**/templates/*.html", root + "**/templates/**/*.html" ]
		, compiled = root + "templates/handlebars.js";
		;

	grunt.loadNpmTasks("grunt-contrib-clean");
	grunt.loadNpmTasks("grunt-contrib-handlebars");

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
	    				.replace(".html", "")
	    				.substring(1);
	  			}
				, processPartialName: function(filename) { // input:  templates/_header.hbs
						// filename = filename
	    	// 			.replace("client/backbone/app", "")
	    	// 			.replace("templates/", "")
	    	// 			.replace(".html", "")
	    	// 			.substring(1);

    				var pieces = filename.split("/");
    				return pieces[pieces.length - 1]; // output: _header.hbs
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