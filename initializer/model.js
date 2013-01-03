var model = require("../model");

module.exports.init = function(connection) {

	var models = {};

	[
			{ name: "User",		path: "user" }
		,	{ name: "Person",	path: "person" }

	].map(function(defn) {
		models[defn.name] = model(defn.path, connection);
	});

	return models;
}