var resource = require("../resource");

module.exports.init = function(app, models) {

	// Define resources
	[
	    { name: "people", 	model: models.Person }

	].map(function(defn) {
		resource.common(app, defn.name, models, defn.model);
	});

}