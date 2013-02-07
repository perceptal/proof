var _ = require("underscore");

module.exports = function(app, models, util, messaging, cache, authenticate, authorize) {

	var User = models.User
    , Person = models.Person;

	app.get("/api/users/:id", function(req, res, next) {

    User.findOne({ _id: req.params.id }, function(err, user) {
      if (err) return res.send(500);
      if (user == null) return res.send(404);

      User.findOne({ _id: user.id }).populate("people", null, { code: user.code }).exec(function(err, user) {
        if (err) return res.send(500);
        return res.send(200, user.toJSON({ hide: "password salt" }));
      });
    });
	});
}
