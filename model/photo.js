var _ = require("underscore")
  , fs = require("fs")
  , async = require("async")
  , mongoose  = require("mongoose")
  , Schema    = mongoose.Schema
  , Uploader  = require("../service/photo/uploader")
  , Processor = require("../service/photo/processor") 
  , config = require("../service/photo/config")
  ;

var PhotoSchema = new Schema({
    name              : { type: String, required: true, lowercase: true, index: true }
  , caption           : { type: String }
  , isDefault         : { type: Boolean, default: false }
  , size              : { type: String, enum: _.pluck(config, "name") }
  , contentType       : { type: String, enum: [ "image/jpeg", "image/png" ] }
  , person            : { type: Schema.ObjectId, ref: "person" }
});

PhotoSchema.pre("save", function(next) {

  var photo = this
    , path = this.name
    , processor = new Processor({ path: photo.name });
  
  processor.square(this.size, function(err, result) {
    if (err) next(err);

    processor.format(function(err, type) {
      if (err) next(err);

      photo.contentType = "image/" + type.toLowerCase();

      var uploader = new Uploader({ path: result.path });

      uploader.put(function(err) {
        if (err) next(err);

        photo.name = result.name;

        fs.unlink(result.path, function(err) {
          next();
        });
      });
    });
  });
});

PhotoSchema.methods.download = function(callback) {
  new Uploader({ path: this.name }).get(callback);      // TODO Cache
};

PhotoSchema.statics.findDefault = function(person, size, callback) {
  this.findOne({ person: person, isDefault: true, size: size }).exec(callback);
};

module.exports = PhotoSchema;
