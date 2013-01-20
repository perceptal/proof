var Hooks = function() {
  this.Before(function(callback) {
    this.startup("test", callback);
  });

  this.After(function(callback) {
    this.shutdown(callback);
  });
};

module.exports = Hooks;