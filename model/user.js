var _ = require("underscore")
  , mongoose = require("mongoose")
  , bcrypt   = require("bcrypt")
  , Schema   = mongoose.Schema
  ;

module.exports = function(connection) {
  var UserSchema = new Schema({
      name              : { type: String, required: true, lowercase: true, unique: true, index: true }
    , password          : { type: String, required: true }
    , sessionId         : { type: String }
    , people            : [ { type: Schema.ObjectId, ref: "person" } ]
    , accounts          : [ { type: Schema.ObjectId, ref: "account" } ]
  });

  var generate = function(len) {
    var set = "abcdefghijklmnopqurstuvwxyzABCDEFGHIJKLMNOPQURSTUVWXYZ"
      , length = set.length
      , uniq = "";

    for (var i = 0; i < len; i++) {
      uniq += set[Math.floor(Math.random() * length)];
    }
    
    return uniq;
  }

  UserSchema.pre("save", function(next) {
    var user = this;
    
    if (!user.isModified("password")) return next();
   
    bcrypt.genSalt(9, function(err, salt) {
      if (err) return next(err);
     
      bcrypt.hash(user.password, salt, function(err, hash) {
        if (err) return next(err);

        user.password = hash;

        next();
      });
    });
  });

  var find = function(query, find, callback) {
    find(query)
      .populate("people")
      .populate("accounts")
      .exec(callback);
  }

  UserSchema.statics.findOneAndPopulate = function(query, callback) {
    find(query, this.findOne.bind(this), callback);
  }

  UserSchema.statics.findAndPopulate = function(query, callback) {
    find(query, this.find.bind(this), callback);
  }

  UserSchema.methods.authenticate = function(password, callback) {
    bcrypt.compare(password || "", this.password, function(err, matches) {
      if (err) return callback(err);
      callback(null, matches);
    });
  }

  UserSchema.methods.session = function(code, callback) {
    var user = this;

    if (!_.contains(_.pluck(user.people, "code"), code)) return callback();

    user.sessionId = [ code, generate(16) ].join("|");
    
    user.save(function(err, user) {
      if (err) return callback(err);
      return callback(null, user);
    });
  }

  UserSchema.virtual("token").get(function() {
    return "Basic " + new Buffer([ this.name, this.sessionId ].join(":"), "binary").toString("base64");
  });

  return UserSchema;
}