var _ = require("underscore")
  , async = require("async")
  , helper = new (require("../test/helper"))(false);

var Seed = function(name, reset) {
	this.name = name;
}

Seed.prototype.run = function() {
	var that = this;

	helper.init(function() {
		helper.seed(that.name, function() {
			// helper.environment.stop(function() {});
		});
	});
}

module.exports = Seed;

// module.exports = function(grunt) {
  
//   grunt.registerTask("seed", "Seed the development database", function() {
//   	new Seed().run();
//   });
// };
