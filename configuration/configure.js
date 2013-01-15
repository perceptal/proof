var nconf = require("nconf");

module.exports = function() {
  nconf.use("memory");

  nconf.env("_").argv();

  var environment = nconf.get("NODE:ENV") || "development";

  nconf.file("default", "config/default.json");
  nconf.file(environment, "config/" + environment + ".json");
}