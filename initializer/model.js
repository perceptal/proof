var model = require("../model");

module.exports.init = function(connection) {

	var models = {};

	[
			{ name: "Claim" }
    , { name: "Account" }
    , { name: "Group" }
    , { name: "Person" }
    , { name: "Role" }
    , { name: "User" }

	].map(function(defn) {
		models[defn.name] = model(defn.path || defn.name.toLowerCase(), connection);
	});

	return models;
}