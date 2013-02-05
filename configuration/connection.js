var mongoose = require("mongoose")
  , configuration = require("./")
  ;

var Connection = function() {

	if (!(this instanceof Connection)) return new Connection();

	this.config = { 
			host: configuration("mongodb:host")
		, database: configuration("mongodb:database")
		, port: 27017 
	};
  this.connectionString = configuration("mongodb:url");
}

Connection.prototype.open = function(callback) {
  if (this.connection == null) {
    var options = { server: { auto_reconnect: false }};
    
    if (this.connectionString === undefined)
      this.connection = mongoose.createConnection(this.config.host, this.config.database, this.config.port, options);
    else
      this.connection = mongoose.createConnection(this.connectionString, options);
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