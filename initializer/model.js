var model = require("../model");

module.exports.init = function(connection) {

	var models = { length: 0 };

	[
      { name: "Account" }
    , { name: "Group" }
    , { name: "Person" }
    , { name: "Role" }
    , { name: "User" }
    , { name: "Photo" }
    , { name: "Document" }

	].map(function(defn) {
		models[defn.name] = model(defn.path || defn.name.toLowerCase(), connection);
    models.length++;
	});

	return models;
}