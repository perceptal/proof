var mongoose  = require("mongoose")
	, Schema    = mongoose.Schema;

module.exports = function(connection) {

  var PersonSchema = new Schema({
      name                  : { type: String, required: true, index: true }
    , firstName            	: { type: String, required: true }
    , lastName             	: { type: String, required: true }
    , title             		: { type: String }
    , gender             		: { type: String, enum: [ "male", "female" ] }
    , dob                   : { type: Date }
    , email                 : { type: String }
    , telephone             : { type: String }
    , securityKey           : { low: { type: Number }, high: { type: Number }} 
    , code                  : { type: String }
    , group                 : { type: Schema.ObjectId, ref: "group" }
    , user                  : { type: Schema.ObjectId, ref: "user" }
    , roles                 : [ { type: Schema.ObjectId, ref: "role" } ]
    , photos                : [ { type: Schema.ObjectId } ]
  });

  var find = function(query, find, callback) {
    find(query)
      .populate("group")
      .populate("user")
      .populate("roles")
      .exec(callback);
  }

  PersonSchema.statics.findOneAndPopulate = function(query, callback) {
    find(query, this.findOne.bind(this), callback);
  }

  PersonSchema.statics.findAndPopulate = function(query, callback) {
    find(query, this.find.bind(this), callback);
  }

  PersonSchema.pre("save", function(next) {
    var person = this;

    var Group = connection.model("group", require("./group"));
    Group.findOne({ _id: person.group }, function(err, group) {
      if (err) return next(err);
      if (!group) return next();

      person.securityKey = group.securityKey;
      person.code = group.code;

      next();
    });
  });

  return PersonSchema;
}
