var _ = require("underscore");

module.exports.set = function(model, data, properties) {
  _(properties).each(function(prop) {
    model[prop] = data[prop];
  });
}