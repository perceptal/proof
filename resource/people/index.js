module.exports = function(app, models, authenticate, authorize) {

	var Person = models.Person;

	app.get("/api/people", authenticate.basic(), authorize.can()
  , function(req, res, next) {

			Person.findAndPopulate({}, function(err, people) {
				if (err) return next(err);
				return res.send(200, people);
			});
	});

	app.get("/api/people/:id", authenticate.basic()
	, function(req, res, next) {

			Person.findOneAndPopulate({ _id: req.params.id }, function(err, person) {			
				if (person == null) return res.send(404);
				if (err) return next(err);
				return res.send(200, person);
			});
	});

	app.post("/api/people", function(req, res, next) {
		var person = new Person({
				firstName: req.body.firstName
			, lastName: req.body.lastName
		});

		person.save(function(err, person) {
			if (err) return next(err);
			return res.send(200, person);
		});

	});

	app.put("/api/people/:id", function(req, res, next) {
		Person.findOne({ _id: req.params.id }, function(err, person) {
			if (person == null) return res.send(404);
			if (err) return next(err);
			
			person.firstName = req.body.firstName;
			person.lastName = req.body.lastName;

			person.save(function(err) {
				if (err) return next(err);
				return res.send(200, person);
			});
		});
	});

	app.del("/api/people/:id", function(req, res, next) {
		Person.findOne({ _id: req.params.id }, function(err, person) {
			if (person == null) return res.send(404);
			if (err) return next(err);

			person.remove(function(err) {
				if (err) return next(err);
				return res.send(204);
			});
		});
	});

}
