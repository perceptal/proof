var mongoose  = require("mongoose")
	, Schema    = mongoose.Schema;

var PersonSchema = new Schema({
    name                  : { type: String, required: true, index: true }
  , firstName            	: { type: String, required: true }
  , lastName             	: { type: String, required: true }
  , title             		: { type: String }
  , gender             		: { type: String, enum: [ "male", "female" ] }
  , dob                   : { type: Date }
  , securityKey           : { min: { type: Number }, max: { type: Number }} 
  , group                 : { type: Schema.ObjectId, ref: "group" }
  , user                  : { type: Schema.ObjectId, ref: "user" }
  , roles                 : [ { type: Schema.ObjectId, ref: "role" } ]
  , photos                : [ { type: Schema.ObjectId, ref: "photo" } ]
});

var find = function(query, find, callback) {
  find(query)
    .populate("group")
    .populate("user")
    .exec(callback);
}

PersonSchema.statics.findOneAndPopulate = function(query, callback) {
  find(query, this.findOne.bind(this), callback);
}

PersonSchema.statics.findAndPopulate = function(query, callback) {
  find(query, this.find.bind(this), callback);
}

module.exports = PersonSchema;
