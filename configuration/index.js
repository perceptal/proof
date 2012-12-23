var config = require("config");

module.exports = function(path) {
 	
 	getFromConfig = function(path, cfg) {
	  var keys = path.split("/")
	    , o = cfg;

	  for (var i=0; i < keys.length; i++) {
	    if (keys[i] in o)
	      o = o[keys[i]];
	    else
	      return "";
	  }

	  return o;
	}

	return getFromConfig(path, config);
};