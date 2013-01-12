var mongoose  = require("mongoose")
  , Schema    = mongoose.Schema;

var RoleSchema = new Schema({
    name              : { type: String, required: true, lowercase: true, index: true }
  , claims            : [ { type: Schema.ObjectId, ref: "claim" } ]
});

module.exports = RoleSchema;
