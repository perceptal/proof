var async = require("async")
  , Environment = require("../environment");

var NAMES = [ "Person", "User" ];

var Helper = function() {
  this.environment = new Environment();
}

Helper.prototype.resetDatabase = function(callback) {
  var models = this.environment.models;
  async.forEach(NAMES, function(name, cb) {
    var Model = models[name];
    Model.find({}).remove(cb);
  }, callback);
}

Helper.prototype.start = function(callback) {
  var that = this;

  this.environment.start(function() {
    that.resetDatabase(callback);
  });
}

Helper.prototype.stop = function(callback) {
  this.environment.stop(callback);
}

Helper.prototype.fixture = function(model, name) {
  return require("./fixture/" + model + "/" + name);
}

module.exports = new Helper();