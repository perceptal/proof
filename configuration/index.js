var config = require("config");

module.exports = function(path) { 	
  var keys = path.split("/")
    , o = config;

  for (var i=0, length = keys.length; i < length; i++) {
    if (keys[i] in o)
      o = o[keys[i]];
    else
      return "";
  }

  return o;
};