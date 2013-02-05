var Hooks = function() {
  console.log("hooks");
  
  this.Before(function(callback) {
    console.log("before");
    this.startup(callback);
  });

  this.After(function(callback) {
    console.log("after");
    this.shutdown(callback);
  });
};

module.exports = Hooks;