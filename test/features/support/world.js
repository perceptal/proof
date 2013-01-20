var helper = new (require("../../helper"))()
  , Browser = require("zombie")
  ;

var World = function World(callback) {
  this.browser = new Browser({ site: helper.baseUrl, runScripts: true });
  callback();
};

World.prototype.startup = function(seed, callback) {
  helper.start(function() {
    helper.seed(seed, callback)
  });
}

World.prototype.shutdown = function(callback) {
  helper.stop(callback);
}

World.prototype.visit = function(url, callback) {
  this.browser.visit(url, callback);  
}

module.exports = World;