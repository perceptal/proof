module.exports = function(app, models) {

	var User = models.User;

	app.get("/api/users/session/:sessionid", function(req, res, next) {
		return res.send(200);
	});
}
