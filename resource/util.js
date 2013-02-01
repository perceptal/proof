var _ = require("underscore");

module.exports.set = function(model, data, properties) {
  _(properties).each(function(prop) {
    model[prop] = data[prop];
  });
}

module.exports.error = function(code, msg) {
  var err = new Error(msg || require("http").STATUS_CODES[code]);
  err.status = code;
  return err;
};
