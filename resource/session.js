var uuid = require("node-uuid");

module.exports = function(app, models) {

	var User = models.User;

	app.post("/api/session", function(req, res, next) {
		User.findOne({ email: req.body.username, password: req.body.password }, function(err, user) {
			if (err) return res.send(500);
			if (user == null) return res.send(404);

			user.sessionId = uuid.v4();

			user.save(function(err, user) {
				if (err) return res.send(500);
				return res.send(200, user.toJSON({ hide: "password" }));
			});
		});
	});

	app.del("/api/session/:id", function(req, res, next) {
		User.findOne({ _id: req.params.id }, function(err, user) {
			if (err) return res.send(500);
			if (user == null) return res.send(404);

			user.sessionId = null;

			user.save(function(err, user) {
				if (err) return res.send(500);
				return res.send(204);
			});
		});
	});
}
