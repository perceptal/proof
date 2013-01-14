var _ = require("underscore")
  , async = require("async")
  , helper = new (require("../test/helper"))(false);

var Clean = function() {
}

Clean.prototype.run = function() {
  var that = this;

  helper.init(function() {
    helper.resetDatabase(function() {
      helper.environment.stop(function() {});
    });
  });
}

module.exports = Clean;

// module.exports = function(grunt) {
  
//   grunt.registerTask("seed", "Seed the development database", function() {
//    new Seed().run();
//   });
// };
