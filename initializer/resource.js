var resource = require("../resource")
  , Authenticate = require("../configuration/authenticate")
  , Authorize = require("../configuration/authorize")
  ;

module.exports.init = function(app, models) {

	// Define resources
	[
      { name: "people"           , thing: "person" }
    , { name: "people/photos"    , thing: "person" }
    , { name: "sessions" }
    , { name: "sessions/config" }
	  , { name: "users"            , thing: "user" }

	].map(function(defn) {
		resource.define(app, defn.name, models, new Authenticate(models), new Authorize(defn.thing, models));
	});
}