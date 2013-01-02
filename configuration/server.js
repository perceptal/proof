var express = require("express")
  , stylus = require("stylus")
	, configuration = require("./")
	;

var Server = function() {
	if (!(this instanceof Server)) return new Server();

	var root = __dirname + "/../";

	var compile = function(str, path) {
	  return stylus(str)
	    .set("filename", path)
	    .set("compress", false)
	    .use(require("nib")())
	    .define("url", stylus.url({ paths: [ root + "public" ] }))
	    .import("nib");
	}

	var configure = function() {
		var app = express();

		app.configure(function(){
	 		app.set("title", "My Application");

  		app.use(express.favicon(root + "public/img/logo.png"));

			app.use(app.router);
  		app.use(express.bodyParser());
  		app.use(express.cookieParser());
  		app.use(express.methodOverride());

		  app.use(stylus.middleware({
		    	debug: 		true
		    , src: 			root + "views"
		    , dest: 		root + "public"
		    , force: 		true
		    , compile: 	compile
		  }));

	 		app.use(express.static(root + "client/" + configuration("client")));
			app.use(express.static(root + "public"));
		});

		app.configure("development", function(){
		});

		app.configure("production", function(){
		});

		return app;
	}

	this.app = configure();
};

Server.prototype.start = function() {
	var port = configuration("port");

	this.app.listen(port);

	return this.app;
}

module.exports = Server;