var Server = require("./configuration/server")
  , Connection = require("./configuration/connection")
  , initialize = require("./initializer")
  ;

function Environment() {
  if (!(this instanceof Environment)) return new Environment();

  this.server = new Server();
  this.db = new Connection();
}

Environment.prototype.init = function(callback) {
  var that = this;

  this.db.open(function(connection) {
    connection.once("open", function() {

      that.models = initialize("model", connection);
      that.server.configure(that.models);

      initialize("resource", that.server.app, that.models);

      callback();
    });
  });
}

Environment.prototype.start = function(callback) {
  var that = this;

  this.init(function() {
    that.server.start(callback);
  });
}

Environment.prototype.stop = function(callback) {
  var that = this;
  this.db.close(function() {
    that.db = new Connection();
    that.server.stop(callback);
  });
}

module.exports = Environment;