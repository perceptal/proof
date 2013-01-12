var mongoose  = require("mongoose")
	, Schema    = mongoose.Schema;

var PersonSchema = new Schema({
    firstName            	: { type: String, required: true }
  , lastName             	: { type: String, required: true }
  , title             		: { type: String }
  , gender             		: { type: String }
  , group                 : { type: Schema.ObjectId, ref: "group" }
  , user                  : { type: Schema.ObjectId, ref: "user" }
  , roles                 : [ { type: Schema.ObjectId, ref: "role" } ]
});

PersonSchema.statics.search = function(query) {
	var search = new RegExp(query, "i");
  return this.or( [ { "firstName": search }, { "lastName": search } ]);
}

module.exports = PersonSchema;
