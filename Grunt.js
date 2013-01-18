module.exports = function(grunt) {

	grunt.loadNpmTasks("grunt-contrib-handlebars");
	grunt.loadNpmTasks("grunt-contrib-clean");
	
	grunt.initConfig({

    pkg: "<json:package.json>"
    
	, clean: [ "client/backbone/app/templates/handlebars.js" ]

  , handlebars: {
      compile: {
        options: {
          namespace: "Templates"
        , wrapped: true
	    	, processName: function(filename) {
	    			return filename
	    				.replace("client/backbone/app", "")
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
          "client/backbone/app/templates/handlebars.js": [
          	"client/backbone/app/**/templates/*.html"
          , "client/backbone/app/**/templates/**/*.html"
          ]
        }
      }
    }
  });

  grunt.registerTask("default", [ "handlebars" ]);

};