var _ = require("underscore")
  , fs = require("fs")
  , path = require("path")
  , crypto = require("crypto")
  , mongoose  = require("mongoose")
  , Schema    = mongoose.Schema
  , Uploader  = require("../service/photo/uploader")
  ;

module.exports = function(connection) {
  var DocumentSchema = new Schema({
      name              : { type: String, required: true, lowercase: true, index: true }
    , title             : { type: String }
    , tags              : [ { type: String } ]
    , contentType       : { type: String }
    , extension         : { type: String }
    , owner             : { type: Schema.ObjectId }
  });

  DocumentSchema.pre("save", function(next) {
    var doc = this;

    if (!doc.isModified("name")) return next();

    var uploader = new Uploader({ path: doc.name, directory: "documents" });

    uploader.put(function(err) {
      if (err) next(err);

      doc.name = uploader.name;

      next();
    });
  });

  DocumentSchema.post("remove", function(doc) {
    new Uploader().delete({ name: doc.name, directory: "documents" }, function() {});
  });

  DocumentSchema.methods.download = function(callback) {
    new Uploader({ path: this.name, directory: "documents" }).get(function(err, file) {
      callback(err, file, crypto.createHash("md5").update(new Buffer(file)).digest("hex"));
    });
  };

  return DocumentSchema;
}