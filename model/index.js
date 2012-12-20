var mixin = require("../util/mixin")
	, Validatable = require("./validatable");

var model = function(name) {
	var Model = require("./" + name);

	mixin(Model, Validatable);

	return Model;
}

module.exports = model;

