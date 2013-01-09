module.exports = function(app, models) {

	var User = models.User;

	app.post("/api/session", function(req, res, next) {
		console.log(req.body);

		return res.send(200);
	});

	app.del("/api/session/:id", function(req, res, next) {
		return res.send(204);
	});

}
