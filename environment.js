var Server = require("./configuration/server")
  , Connection = require("./configuration/connection")
  , initialize = require("./initializer")
  , Socket = require("./socket")
  ;

function Environment(messaging, cache) {
  if (!(this instanceof Environment)) return new Environment();

  this.server = new Server();
  this.db = new Connection();

  this.messaging = messaging;
  this.cache = cache;
}

Environment.prototype.init = function(callback) {
  var that = this;

  this.db.open(function(connection) {
    connection.once("open", function() {

      that.models = initialize("model", connection);
      that.server.configure(that.models);

      initialize("resource", that.server.app, that.models, that.messaging, that.cache);

      callback();
    });
  });
}

Environment.prototype.start = function(callback) {
  var that = this;

  this.init(function() {
    that.server.start(function() {
      new Socket(that.server.io, that.messaging).broadcast();

      if (callback) callback();
    });
  });
}

Environment.prototype.stop = function(callback) {
  var that = this;
  this.db.close(function() {
    that.db = new Connection();
    if (that.server.started) 
      that.server.stop(callback);
    else
      callback();
  });
}

module.exports = Environment;