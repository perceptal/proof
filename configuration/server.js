var express = require("express")
  , stylus = require("stylus")
	, passport = require("passport")
	, flash = require("connect-flash")
	, configuration = require("./")
	, authentication = require("./authentication")
	;

var Server = function() {
	if (!(this instanceof Server)) return new Server();
};

Server.prototype.configure = function(User) {

	var compile = function(str, path) {
	  return stylus(str)
	    .set("filename", path)
	    .set("compress", false)
	    .use(require("nib")())
	    .define("url", stylus.url({ paths: [ root + "public" ] }))
	    .import("nib");
	}

	var root = __dirname + "/../"
	  , app = express();

	authentication.configure(User);

	app.configure(function() {
 		app.set("title", "Proof");
		app.set("views", root + "/views");
  	app.set("view engine", "jade");

		app.use(express.favicon(root + "public/img/logo.png"));

		app.use(express.bodyParser());
		app.use(express.cookieParser());
		app.use(express.methodOverride());
		app.use(express.session({ secret: "esoognom", cookie: { maxAge: 60000 }}));
		app.use(passport.initialize());
  	app.use(passport.session());
  	app.use(flash());

	  app.use(stylus.middleware({
	    	debug: 		true
	    , src: 			root + "views"
	    , dest: 		root + "public"
	    , force: 		true
	    , compile: 	compile
	  }));

		app.use("/vendor", express.static(root + "components"));
		app.use(express.static(root + "public"));
 		app.use(express.static(root + "client/" + configuration("client") + "/app"));

		app.use(function(err, req, res, next){
		  console.error(err, err.stack);
		  res.send(500, "Something broke!");
		});

  	app.use(app.router);
	});

	app.configure("development", function() {
 		app.use("/test", express.static(root + "client/" + configuration("client") + "/test"));
	  app.use(express.errorHandler({
	    	showStack: true
	    , dumpExceptions: true
	  }));
	  app.use(express.logger({ format: "\u001b[1m:method\u001b[0m \u001b[33m:url\u001b[0m :response-time ms" }));
	});

	app.configure("test", function(){
 		app.use("/test", express.static(root + "client/" + configuration("client") + "/test"));
	});

	app.configure("production", function(){
	  app.use(express.logger({ format: "\u001b[1m:method\u001b[0m \u001b[33m:url\u001b[0m :response-time ms" }));
	});

	this.app = app;
}

Server.prototype.start = function() {
	this.app.listen(configuration("port"));

	return this.app;
}

module.exports = Server;