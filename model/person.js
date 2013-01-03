var mongoose  = require("mongoose")
	, Schema    = mongoose.Schema;

var PersonSchema = new Schema({
    firstName            	: { type: String, required: true }
  , lastName             	: { type: String, required: true }
  , title             		: { type: String, required: true }
  , gender             		: { type: String, required: true }
});

module.exports = PersonSchema;
