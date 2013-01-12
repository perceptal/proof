var mongoose  = require("mongoose")
  , Schema    = mongoose.Schema;

var AccountSchema = new Schema({
    network           : { type: String, required: true, enum: [ "facebook", "twitter" ] }
  , name              : { type: String, required: true, lowercase: true, index: true }
  , networkId         : { type: String }
  , user              : { type: Schema.ObjectId, ref: "user" }
});

module.exports = AccountSchema;
