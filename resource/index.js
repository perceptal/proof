module.exports.define = function(app, resource, models) {
  require("./" + resource)(app, models);
}
