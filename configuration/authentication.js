var passport = require("passport")
  , configuration = require("./")
  , config = configuration("authentication")
  , hostname = "http://" + configuration("hostname") + ":" + configuration("port")
  , LocalStrategy = require("passport-local").Strategy
  , TwitterStrategy = require("passport-twitter").Strategy
  , FacebookStrategy = require("passport-facebook").Strategy
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

	passport.use(new LocalStrategy(function(email, password, done) {
    process.nextTick(function () { 
      User.findOne({ email: email }, function(err, user) {
        if (err) { return done(err); }
        if (!user) { return done(null, false, { message: "Unknown user " + email }); }
        if (user.password !== password) { return done(null, false, { message: "Invalid password" }); }
        return done(null, user);
      })
	  });
	}));

	passport.use(new TwitterStrategy({
	  consumerKey: config.twitter.consumerKey,
	  consumerSecret: config.twitter.consumerSecret,
	  callbackURL: hostname + "/login/twitter/callback"

	}, function(accessToken, refreshToken, profile, done) {
    process.nextTick(function() { 
			return done(null, profile);
		});
	}));

	passport.use(new FacebookStrategy({
	  clientID: config.facebook.appId,
	  clientSecret: config.facebook.appSecret,
	  callbackURL: hostname + "/login/facebook/callback"	

	}, function(accessToken, refreshToken, profile, done) {
    process.nextTick(function() { 
			return done(null, profile);
		});
	}));
}