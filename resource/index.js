module.exports.define = function(app, resource, models, messaging, cache, authenticate, authorize) {
  require("./" + resource)(app, models, require("./util"), messaging, cache, authenticate, authorize);
}
