var _ = require("underscore")
  , async = require("async")
  , mongoose  = require("mongoose")
  , Schema    = mongoose.Schema
  , Uploader  = require("./service/photo/uploader")
  , Processor = require("./service/photo/processor") 
  , config = require("../service/photo/config")
  ;

var PhotoSchema = new Schema({
    name              : { type: String, required: true, lowercase: true, index: true }
  , caption           : { type: String }
  , isDefault         : { type: Boolean }
  , size              : { type: String, enum: _.pluck(config, "name") }
  , filename          : { type: String }
  , contentType       : { type: String, enum: [ "image/jpeg", "image/png" ] }
  , length            : { type: Number }
  , person            : { type: Schema.ObjectId, ref: "person" }
});

PhotoSchema.pre("save", function(next) {

  // var processor = new Processor({ path: this.name })
  //   , data = _.defaults(_.find(config, function(item) { return item.name === this.size; }), { width: 0, height: 0 });
  
  // // Get stream
  // var stream = processor.stream(function(stream) {

  // });

  // // Resize to width and height
  // processor.resize(data.width, data.height, function(stream) {

  // });

  // // Crop to width and height
  // processor.crop(data.width, data.height, function(stream) {

  // });

  // // Upload to S3
  // var uploader = new Uploader({ stream: stream });

  // uploader.put()

  next();

});

module.exports = PhotoSchema;
