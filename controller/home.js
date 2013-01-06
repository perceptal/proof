var passport = require("passport");

module.exports = function(app, models, authenticated) {

	var User = models.User;

	app.get("/", function (req, res) {
	  res.render("home", { user: req.user });
	});

	app.get("/account", authenticated.ensure, function (req, res) {
	  res.render("account", { user: req.user });
	});

	app.get("/register", function (req, res) {
	  res.render("register", { user: req.user });
	});

	app.post("/register", function (req, res, next) {
		
		var user = new User({ 
				email: req.body.email
			, password: req.body.password 
		});

		user.save(function(err) {
    	if (err) return next(err);

    	req.logIn(user, function(err) {
	    	if (err) return next(err);

				return res.redirect("/account");
    	});
		});
	});

}
