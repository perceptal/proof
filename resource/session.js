module.exports = function(app, models) {

	var User = models.User;

	app.post("/api/session", function(req, res, next) {
		User.findOne({}, function(err, user) {
			if (err) return res.send(500);
			return res.send(200, user);
		});
	});

	app.del("/api/session/:id", function(req, res, next) {
		return res.send(204);
	});

}
