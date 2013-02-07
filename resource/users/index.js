var _ = require("underscore");

module.exports = function(app, models, util, messaging, cache, authenticate, authorize) {

	var User = models.User
    , Person = models.Person;

	app.get("/api/users/:id", function(req, res, next) {

    User.findOne({ _id: req.params.id }, function(err, user) {
      if (err) return res.send(500);
      if (user == null) return res.send(404);

      Person.findOne({ _id: { $in: user.people }, code: user.code }, function(err, person) {
        user.people.length = 0;
        user.people.push(person);
        console.log(person, user, user.toJSON());

        return res.send(200, user.toJSON({ hide: "password salt" }));
      });
    });
	});
}
