var passport = require("passport")
  , BasicStrategy = require("passport-http").BasicStrategy
  ;

module.exports.configure = function(User) {
	passport.serializeUser(function(user, done) {
	  done(null, user.id);
	});

	passport.deserializeUser(function(id, done) {
	  User.findOne({ _id: id }, function (err, user) {
	  	done(err, user);
	  });
	});

	passport.use(new BasicStrategy(function(email, sessionId, done) {
    process.nextTick(function () { 
      User.findOne({ email: email }, function(err, user) {
  			
        if (err) { return done(err); }
        if (!user) { return done(null, false, { message: "Unknown user " + email, status: 403 }); }
        if (user.sessionId !== sessionId) { return done(null, false, { message: "Invalid token", status: 403 }); } // Localise
        
        return done(null, user);
      });
	  });
	}));
}