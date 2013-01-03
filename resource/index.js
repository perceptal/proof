var _ = require("underscore")
  , restify = require("restify")
  , error = require("./error");

module.exports.common = function(app, resource, models, model) {
	common(app, messaging, resource, model);
  require("./" + resource)(app, models);
}

module.exports.define = function(app, resource, models) {
  require("./" + resource)(app, models);
}

var common = function(app, messaging, url, Model) {

	app.del("/" + url + "/:id", function(req, res, next) {

	  Model.findById(req.params.id, function(err, o) {
      if (o == null) return next(error.notFound(err, req.params.id));
  		if (err) return next(error.internal(err, req.params.id));

    	o.remove(function() {
	    	return res.send(204);
    	});
    });
	});
}
