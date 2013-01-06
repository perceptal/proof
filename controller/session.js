var passport = require("passport");

module.exports = function(app) {

	app.get("/login", function(req, res) {
		res.render("login", { user: req.user, message: req.flash("error") });
	});

	app.post("/login", passport.authenticate("local", { failureRedirect: "/login", failureFlash: true }), function(req, res) {
    res.redirect("/");
  });

	app.get("/login/twitter", passport.authenticate("twitter"));
	app.get("/login/twitter/callback", passport.authenticate("twitter", { successRedirect: "/", failureRedirect: "/login" }));

	app.get("/login/facebook", passport.authenticate("facebook"));
	app.get("/login/facebook/callback", passport.authenticate("facebook", { successRedirect: "/", failureRedirect: "/login" }));
	
	app.get("/logout", function(req, res) {
	  req.logout();
	  res.redirect("/");
	});

}
