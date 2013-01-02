var mongoose  = require("mongoose")
	, Schema    = mongoose.Schema;

var UserSchema = new Schema({
    name              : { type: String, required: true, index: true }
  , email             : { type: String, required: true, lowercase: true, index: true }
});

module.exports = UserSchema;
