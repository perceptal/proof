var mongoose  = require("mongoose")
  , Schema    = mongoose.Schema;

var GroupSchema = new Schema({
    name              : { type: String, required: true, lowercase: true, index: true }
  , code              : { type: String, required: true, lowercase: true, index: true }
  , securityKey       : { min: { type: Number }, max: { type: Number }}
  , level             : { type: Number }
  , isPrimary         : { type: Boolean }
  , parent            : { type: Schema.ObjectId, ref: "group" }
  , people            : [ { type: Schema.ObjectId, ref: "user" } ]
  , roles             : [ { type: Schema.ObjectId, ref: "role" } ]
});

module.exports = GroupSchema;
