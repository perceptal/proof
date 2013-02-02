var nconf = require("nconf");

module.exports = function() {
  nconf.argv().env("_");

  var environment = nconf.get("NODE:ENV") || "development";

  nconf.file("default", "config/default.json");
  nconf.file(environment, "config/" + environment + ".json");
}