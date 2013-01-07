var controller = require("../controller");

module.exports.init = function(app, models) {

	[
	  //   { name: "home" }
	  // , { name: "session" }
	    // { name: "client" }

	].map(function(defn) {
		controller.define(app, models, defn.name);
	});

}