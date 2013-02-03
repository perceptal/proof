module.exports = function(app, models, util, messaging, cache, authenticate, authorize) {

	var User = models.User;

	app.get("/api/sessions/:id", function(req, res, next) {
		User.findOne({ _id: req.params.id }, function(err, user) {
			if (err) return res.send(500);
			if (user == null) return res.send(404);

			return res.send(200, user.toJSON({ hide: "password" }));
		});
	});

	app.post("/api/sessions", function(req, res, next) {
		User.findOneAndPopulate({ name: req.body.name }, function(err, user) {
			if (err) return res.send(500);
			if (user == null) return res.send(404);

			user.authenticate(req.body.password, function(err, success) {
				if (err) return res.send(500);
				if (!success) return res.send(403);

				user.session(req.body.code, function(err, user) {
					if (err) return res.send(500);
					if (user == null) return res.send(404);

					return res.send(200, user.toJSON({ hide: "password" }));
				});
			});
		});
	});

	app.del("/api/sessions/:id", function(req, res, next) {
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
