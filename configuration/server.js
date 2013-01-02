var express = require("express")
	, configuration = require("./")
	;

var Server = function() {
	if (!(this instanceof Server)) return new Server();


	var configure = function() {
		var app = express();
	
		app.configure(function(){
	 		app.set("title", "My Application");
			app.use(express.static(__dirname + "/../public"));
			app.use(app.router);
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