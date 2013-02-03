var configuration = require("./");

module.exports = function(subsystem) {
	return require("../" + subsystem + "/" + configuration("provider:" + subsystem));	
}