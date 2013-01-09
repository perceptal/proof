var mongoose  			= require("mongoose")
  , Schema    			= mongoose.Schema
  ;

var UserSchema = new Schema({
  	email             : { type: String, required: true, lowercase: true, index: true }
  , password					: { type: String, required: true }
  , sessionId					: { type: String }
});

module.exports = UserSchema;
