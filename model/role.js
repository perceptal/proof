var mongoose  = require("mongoose")
  , Schema    = mongoose.Schema;

module.exports = function(connection) {
  
  var ClaimSchema = new Schema({
      name              : { type: String, required: true, lowercase: true , index: true }
    , thing             : { type: String, required: true, lowercase: true }
    , right             : { type: String, required: true, enum: [ "create", "read", "update", "delete" ] }
  });

  var RoleSchema = new Schema({
      name              : { type: String, required: true, lowercase: true, index: true }
    , group             : { type: Schema.ObjectId, ref: "group" }
    , claims            : [ ClaimSchema ]
  });

  return RoleSchema;
}
