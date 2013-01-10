module.exports = function(app, models) {

	var User = models.User;

	app.get("/api/users/:id", function(req, res, next) {
    User.findOne({ _id: req.params.id }, function(err, user) {
      if (err) return res.send(500);
      if (user == null) return res.send(404);
      return res.send(200, user.toJSON({ hide: "password salt" }));
    });
	});
}
