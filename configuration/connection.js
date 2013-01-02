var mongoose = require("mongoose")
  , configuration = require("./")
  ;

var Connection = function() {

	if (!(this instanceof Connection)) return new Connection(arguments);

	this.config = { 
			host: configuration("mongodb/host")
		, database: configuration("mongodb/database")
		, port: 27017 
	};
}

Connection.prototype.open = function(callback) {
  if (this.connection == null) {
      this.connection = mongoose.createConnection(this.config.host, this.config.database, this.config.port, { server: { auto_reconnect: false }});
  };

  callback(this.connection);
};

Connection.prototype.close = function(callback) {
  if (callback == null) callback = function() {};
  
  if (this.connection != null) {
    this.connection.close(function() {
      callback();
    });
  } else
    callback();
};

module.exports = Connection;