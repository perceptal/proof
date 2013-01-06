module.exports.define = function(app, models, name) {
	require("./" + name)(app, models, require("./authenticated"));
}