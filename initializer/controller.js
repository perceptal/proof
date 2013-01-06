var controller = require("../controller");

module.exports.init = function(app, models) {

	[
	    { name: "home" }
	  , { name: "session" }

	].map(function(defn) {
		controller.define(app, models, defn.name);
	});

}