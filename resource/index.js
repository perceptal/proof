module.exports.define = function(app, resource, models, authenticate, authorize) {
  require("./" + resource)(app, models, authenticate, authorize);
}
