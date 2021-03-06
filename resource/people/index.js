module.exports = function(app, models, util, messaging, cache, authenticate, authorize) {

	var Person = models.Person
	  , Photo = models.Photo;

	var findOne = function(id, res, next, callback) {
		Person.findOneAndPopulate({ _id: id }, function(err, person) {			
			if (person == null) return res.send(404);
			if (err) return next(err);

			res.send(200, person);
			if (callback) callback(person);
		});
	}

	app.get("/api/people"
	, authenticate.basic()
	, authorize.can()
  , function(req, res, next) {

			Person.findAndPopulate({}, function(err, people) {
				if (err) return next(err);
				return res.send(200, people);
			});
	});

	app.get("/api/people/:id"
	, authenticate.basic()
	, authorize.can()
	, function(req, res, next) {

		findOne(req.params.id, res, next);
	});

	app.post("/api/people", function(req, res, next) {
		var person = new Person({
				firstName: req.body.firstName
			, lastName: req.body.lastName
		});

		person.save(function(err, person) {
			if (err) return next(err);
			
			findOne(person.id, res, next, function(person) {
				messaging.publish("/api/people:create", person);
			});
		});
	});

	app.put("/api/people/:id", function(req, res, next) {
		Person.findOne({ _id: req.params.id }, function(err, person) {
			if (err) return next(err);
			if (person == null) return res.send(404);

			util.set(person, req.body, [ "firstName", "lastName", "gender", "title", "email", "telephone" ]);

			person.save(function(err) {
				if (err) return next(err);

				Photo.setDefault(person.id, req.body.defaultPhoto, function(err, photo) {
					findOne(person.id, res, next, function(person) {
						messaging.publish("/api/people:update", person);
					});
				});
			});
		});
	});

	app.del("/api/people/:id", function(req, res, next) {
		Person.findOne({ _id: req.params.id }, function(err, person) {
			if (err) return next(err);
			if (person == null) return res.send(404);

			person.remove(function(err) {
				if (err) return next(err);
				messaging.publish("/api/people:delete", person);
				res.send(204);
			});
		});
	});

}
