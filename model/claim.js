var mongoose  = require("mongoose")
  , Schema    = mongoose.Schema;

var ClaimSchema = new Schema({
    name              : { type: String, required: true, lowercase: true , index: true }
  , thing             : { type: String, required: true, lowercase: true }
  , right             : { type: String, required: true, enum: [ "create", "read", "update", "delete" ] }
});

module.exports = ClaimSchema;
