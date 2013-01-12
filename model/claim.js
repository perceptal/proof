var mongoose  = require("mongoose")
  , Schema    = mongoose.Schema;

var ClaimSchema = new Schema({
    thing             : { type: String, required: true, lowercase: true }
  , network           : { type: String, required: true, enum: [ "create", "read", "update", "delete" ] }
});

module.exports = ClaimSchema;
