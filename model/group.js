var mongoose  = require("mongoose")
  , Schema    = mongoose.Schema;

var GroupSchema = new Schema({
    name              : { type: String, required: true, lowercase: true, index: true }
  , code              : { type: String, required: true, lowercase: true, index: true }
  , people            : [ { type: Schema.ObjectId, ref: "user" } ]
  , roles             : [ { type: Schema.ObjectId, ref: "role" } ]
});

module.exports = GroupSchema;
