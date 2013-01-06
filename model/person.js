var mongoose  = require("mongoose")
	, Schema    = mongoose.Schema;

var PersonSchema = new Schema({
    firstName            	: { type: String, required: true }
  , lastName             	: { type: String, required: true }
  , title             		: { type: String }
  , gender             		: { type: String }
});

PersonSchema.statics.search = function(query) {
	var search = new RegExp(query, "i");
  return this.or( [ { "firstName": search }, { "lastName": search } ]);
}

module.exports = PersonSchema;
