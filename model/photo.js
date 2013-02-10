var _ = require("underscore")
  , fs = require("fs")
  , async = require("async")
  , crypto = require("crypto")
  , mongoose  = require("mongoose")
  , Schema    = mongoose.Schema
  , Uploader  = require("../service/photo/uploader")
  , Processor = require("../service/photo/processor") 
  , config = require("../service/photo/config")
  ;

module.exports = function(connection) {
  var PhotoSchema = new Schema({
      name              : { type: String, required: true, lowercase: true, index: true }
    , caption           : { type: String }
    , isDefault         : { type: Boolean, default: false }
    , sizes             : [ { type: String, enum: _.pluck(config, "name") } ]
    , contentType       : { type: String, enum: [ "image/jpeg", "image/gif", "image/png" ] }
    , owner             : { type: Schema.ObjectId }
  });

  PhotoSchema.pre("save", function(next) {
    var photo = this
      , path = photo.name
      , processor = new Processor({ path: path });

    if (!photo.isModified("name")) return next();
    
    if (photo.sizes.length === 0) photo.sizes = _.pluck(config, "name");

    async.forEach(photo.sizes, function(size, callback) {

      processor.square(size, function(err, result) {
        if (err) callback(err);
      
        photo.name = result.name;

        processor.format(function(err, type) {
          if (err) callback(err);

          photo.contentType = "image/" + type.toLowerCase();

          var uploader = new Uploader({ path: result.path, directory: "photos" });

          uploader.put(function(err) {
            if (err) callback(err);

            fs.unlink(result.path, function(err) {
              callback();
            });
          });
        }); 
      }); 
    }, next);
  });

  PhotoSchema.post("remove", function(photo) {
    async.forEach(photo.sizes, function(size, callback) {
      new Uploader().delete({ name: size + "." + photo.name, directory: "photos" }, callback);
    }, function() {
      // noop
    });
  });

  PhotoSchema.methods.download = function(size, callback) {
    new Uploader({ path: [ size, this.name ].join("."), directory: "photos" }).get(function(err, image) {
      callback(err, image, crypto.createHash("md5").update(new Buffer(image)).digest("hex"));
    });
  };

  PhotoSchema.methods.setDefault = function(value, callback) {
    this.isDefault = value;
    this.save(callback);
  };

  PhotoSchema.statics.findDefault = function(owner, callback) {
    this.findOne({ owner: owner, isDefault: true }).exec(callback);
  };

  PhotoSchema.statics.setDefault = function(owner, id, callback) {
    var Photo = this;

    Photo.findOne({ _id: id }, function(err, photo) {
      Photo.findDefault(owner, function(err, previous) {
  
        photo.setDefault(true, function(err) {
          if (previous) 
            previous.setDefault(false, callback);
          else
            callback();
        });
      });
    });
  };

  return PhotoSchema;
}