var mongoose  = require("mongoose")
  , Schema    = mongoose.Schema;

module.exports = function(connection) {

  var AccountSchema = new Schema({
      name              : { type: String, required: true, lowercase: true, index: true }
    , network           : { type: String, required: true, enum: [ "facebook", "twitter" ] }
    , networkId         : { type: String }
    , user              : { type: Schema.ObjectId, ref: "user" }
  });

  return AccountSchema;
}