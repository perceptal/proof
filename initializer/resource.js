var resource = require("../resource");

module.exports.init = function(app, models) {

	// Define resources
	[
	    { name: "people" }
	  , { name: "sessions" }
	  , { name: "users" }

	].map(function(defn) {
		resource.define(app, defn.name, models);
	});

}