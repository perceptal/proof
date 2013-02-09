var _ = require("underscore")
  , fs = require("fs")
  , crypto = require("crypto")
  , mongoose  = require("mongoose")
  , Schema    = mongoose.Schema
  , Uploader  = require("../service/photo/uploader")
  ;

module.exports = function(connection) {
  var DocumentSchema = new Schema({
      name              : { type: String, required: true, lowercase: true, index: true }
    , caption           : { type: String }
    , tags              : [ { type: String } ]
    // , contentType       : { type: String, enum: [ "image/jpeg", "image/png" ] }
    , owner             : { type: Schema.ObjectId }
  });

  DocumentSchema.pre("save", function(next) {
    var doc = this
      , path = doc.name;
    
    doc.contentType = "application/" + type.toLowerCase();  // ?

    var uploader = new Uploader({ path: result.path });

    uploader.put(function(err) {
      if (err) callback(err);

      fs.unlink(result.path, function(err) {
        next;
      });
    });
  });

  DocumentSchema.post("remove", function(photo) {
    async.forEach(photo.sizes, function(size, callback) {
      new Uploader().delete(size + "." + photo.name, callback);
    }, function() {
      // noop
    });
  });

  DocumentSchema.methods.download = function(size, callback) {
    new Uploader({ path: [ size, this.name ].join(".") }).get(function(err, image) {
      callback(err, image, crypto.createHash("md5").update(new Buffer(image)).digest("hex"));
    });
  };

  return DocumentSchema;
}