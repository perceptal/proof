var fs = require("fs")
  , path = require("path")
  , s3 = require("s3")
  , knox = require("knox")
  , config = require("../../configuration")("s3");

var Uploader = function(options) {
  if (!(this instanceof Uploader)) return new Uploader(options);

  this.path = path.resolve(options.path);
  this.directory = path.dirname(options.path);
  this.extension = path.extname(options.path);
  this.name = path.basename(options.path);
  this.client = knox.createClient(config);
}

Uploader.prototype.put = function(callback) {
  var uploader = s3.fromKnox(this.client).upload(this.path, this.name);

  uploader.on("error", function(err) {
    return callback(err);
  });

  uploader.on("end", function() {
    return callback(null);
  });
}

Uploader.prototype.delete = function(callback) {
  this.client.deleteFile(this.name, function(err, res) {
    callback(err);
  });
}

module.exports = Uploader;