var Authenticate = function(models) {
  if (!this instanceof Authenticate) return new Authenticate(models);

  this.models = models;
}

var error = function(code, msg) {
  var err = new Error(msg || require("http").STATUS_CODES[code]);
  err.status = code;
  return err;
};

var populate = function(name, session, callback) {

  var User = this.models.User
    , Person = this.models.Person;

  User.findOne({ name: name }, function(err, user) {

    if (err) return callback(error(500));
    if (!user) return callback(error(404));
    if (user.sessionId !== session) return callback(error(403));
    
    var code = session.split("|")[0];

    Person.findOneAndPopulate({ user: user.id, code: code }, callback);
  });
}

Authenticate.prototype.basic = function(callback) {
  if (callback === undefined) callback = populate.bind(this);

  return function(req, res, next) {
    var authorization = req.headers.authorization;

    if (req.person) return next();
    if (!authorization) return next(error(403));            

    var parts = authorization.split(" ");

    if (parts.length !== 2) return next(error(400));       

    var scheme = parts[0]
      , credentials = new Buffer(parts[1], "base64").toString()
      , index = credentials.indexOf(":");

    if ("Basic" !== scheme || index < 0) return next(error(400));
    
    var name = credentials.slice(0, index)
      , session = credentials.slice(index + 1);

    callback(name, session, function(err, person) {
      if (err) return next(err);
      if (!person) return next(error(403));

      req.person = person;

      next();
    });
  }
};

module.exports = Authenticate;

