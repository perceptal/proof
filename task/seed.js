var async = require("async")
  , initialize = require("../initializer")
  , Connection = require("../configuration/connection");

var NAMES = [ "Person", "User" ];

var Seed = function(name, reset) {

	var that = this;

	this.reset = reset;
	this.set = name;
	this.db = new Connection();

}

var fixture = function(model, name) {
	return require("../test/fixture/" + model + "/" + name);
	// return require("../test/fixture/seed/" + name);
}

var clear = function(reset, models, callback) {
	if (reset) {
		async.forEach(NAMES, function(name, cb) {
			var Model = models[name];
			Model.find({}).remove(cb);
		}, callback);
	} else {
		callback();
	}
}

Seed.prototype.run = function() {
	var that = this;

	this.db.open(function(connection) {
		connection.once("open", function() {

			var models = initialize("model", connection);

			clear(that.reset, models, function() {

				async.forEach(NAMES, function(name, cb) {
					var Model = models[name];
					var data = fixture(Model.modelName, that.set);

					async.forEach(data, function(item, innerCb) {
						var model = new Model(item);

						model.save(innerCb);
					}, cb);
				}, that.db.close);
			});
		});
	});
}

module.exports = Seed;

// module.exports = function(grunt) {
  
//   grunt.registerTask("seed", "Seed the development database", function() {
//   	new Seed().run();
//   });
// };
