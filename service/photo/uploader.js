var fs = require("fs")
  , path = require("path")
  , s3 = require("s3")
  , knox = require("knox")
  , configuration = require("../../configuration");

var Uploader = function(options) {
  if (!(this instanceof Uploader)) return new Uploader(options);

  if (options) {
    this.path = path.resolve(options.path);
    this.directory = options.directory || "";
    this.extension = path.extname(options.path);
    this.name = path.basename(options.path);
    this.remote = options.directory ? path.join(this.directory, this.name) : this.name;
  }

  this.client = knox.createClient({
    key: configuration("S3:KEY")
  , secret: configuration("S3:SECRET")
  , bucket: configuration("S3:BUCKET")
  });
}

Uploader.prototype.get = function(callback) {
  var data = "";

  this.client.get(this.remote)
    .on("response", function(response) {
      response.setEncoding("binary");

      if (response.statusCode !== 200) return callback(new Error("Not found"));

      response.on("data", function(chunk) {
        data += chunk;
      });
 
      response.on("end", function() {
        return callback(null, data);
      });
  }).end();
}

Uploader.prototype.put = function(callback) {
  var uploader = s3.fromKnox(this.client).upload(this.path, this.remote);

  uploader.on("error", function(err) {
    return callback(err);
  });

  uploader.on("end", function() {
    return callback(null);
  });
}

Uploader.prototype.delete = function(options, callback) {
  var path = options.directory ? path.join(options.directory, options.name) : options.name;

  this.client.deleteFile(path, function(err, res) {
    callback(err);
  });
}

module.exports = Uploader;