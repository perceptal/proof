var configuration = require("./");

module.exports = function(subsystem, callback) {
	return require("../" + subsystem + "/" + configuration("provider/" + subsystem));	
}