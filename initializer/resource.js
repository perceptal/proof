var resource = require("../resource")
  , Authenticate = require("../configuration/authenticate")
  , Authorize = require("../configuration/authorize")
  ;

module.exports.init = function(app, models, messaging, cache) {

	// Define resources
	[
      { name: "people"                  , thing: "person" }
    , { name: "organisations"           , thing: "group" }
    , { name: "organisations/roles"     , thing: "group" }
    , { name: "photos" }
    , { name: "documents" }
    , { name: "sessions" }
    , { name: "sessions/config" }
	  , { name: "users"                   , thing: "user" }

	].map(function(defn) {
		resource.define(app, defn.name, models, messaging, cache, new Authenticate(models), new Authorize(defn.thing, models));
	});
}