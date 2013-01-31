var mongoose = require("mongoose")
  , _ = require("underscore")
  ;

module.exports = function(name, connection) {
  var Schema = require("./" + name)(connection);

  common(Schema);

  return connection.model(_.last(name.split("/")), Schema);
}

var common = function(Schema) {
  Schema.virtual("id").get(function() {
    return this._id;
  });

	Schema.methods.toJSON = function(options) {
    var opts = _.extend({ virtuals: true, json: true }, options);

    var o = this.toObject(opts);

    delete o._id;
    delete o.__v;
 
	  if (opts.hide) {
	    opts.hide.split(" ").forEach(function(prop) {
	      delete o[prop];
	    });
	  }

    return o;
  };
}