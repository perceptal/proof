var Environment = require("./environment")
  , provider = require("./configuration/provider")
  ;

// Start her up
var environment = new Environment(provider("messaging"), provider("cache"));

environment.start();