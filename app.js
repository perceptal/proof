var Server = require("./configuration/server")
  , Connection = require("./configuration/connection")
  , initialize = require("./initializer")
  ;

function App() {
	if (!(this instanceof App)) return new App();

	this.server = new Server();
	this.db = new Connection();
}

App.prototype.init = function(callback) {
	var that = this;

	this.db.open(function(connection) {
		connection.once("open", function() {

			that.models = initialize("model", connection);
			that.server.configure(that.models.User);

			initialize("resource", that.server.app, that.models);
			// initialize("controller", that.server.app, that.models);

			callback();
		});
	});
}

App.prototype.start = function() {
	var that = this;

	this.init(function() {
		that.server.start();
	});
}

module.exports = App;