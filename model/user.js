var mongoose = require("mongoose")
  , bcrypt   = require("bcrypt")
  , uuid = require("node-uuid")
  , Schema   = mongoose.Schema
  ;

var UserSchema = new Schema({
    name              : { type: String, required: true, lowercase: true, unique: true, index: true }
  , password          : { type: String, required: true }
  , sessionId         : { type: String }
  , people            : [ { type: Schema.ObjectId, ref: "person" } ]
  , accounts          : [ { type: Schema.ObjectId, ref: "account" } ]
});

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

UserSchema.methods.authenticate = function(password, callback) {
  bcrypt.compare(password || "", this.password, function(err, matches) {
    if (err) return callback(err);
    callback(null, matches);
  });
}

UserSchema.methods.session = function(callback) {
  var user = this;
  user.sessionId = uuid.v4();

  user.save(function(err, user) {
    if (err) return callback(err);
    return callback(null, user);
  });
}

UserSchema.virtual("token").get(function() {
  return "Basic " + new Buffer([ this.name, this.sessionId ].join(":"), "binary").toString("base64");
});

module.exports = UserSchema;