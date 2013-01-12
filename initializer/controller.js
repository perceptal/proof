var controller = require("../controller");

module.exports.init = function(app, models) {

	[

	].map(function(defn) {
		controller.define(app, models, defn.name);
	});

}