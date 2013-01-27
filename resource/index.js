module.exports.define = function(app, resource, models, authenticate, authorize) {
  require("./" + resource)(app, models, require("./util"), authenticate, authorize);
}
