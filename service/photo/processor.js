var _ = require("underscore")
  , path = require("path")
  , im = require("gm").subClass({ imageMagick: true });

var Processor = function(options) {
  if (!(this instanceof Processor)) return new Processor(options);

  this.setPath(options.path);
}

var buildPath = function(directory, name, dimension, extension) {
  return path.join(directory, [ dimension, name ].join(".") + extension);
}

var crop = function(source, sink, dimension, callback) {
  im(source)
    .crop(dimension, dimension, 0, 0)
    .write(sink, callback);
}

var resize = function(source, sink, height, width, callback) {
  im(source)
    .resize(height, width)
    .write(sink, callback);
}

Processor.prototype.square = function(dimension, callback) {
  var that = this
    , config = _.find(require("./config"), function(item) { return item.name === dimension });

  im(this.path).size(function(err, size) {

    if (err) callback(err);

    var h = size.height
      , w = size.width
      , temp = buildPath(that.directory, that.name, [ "tmp", config.name ].join("."), that.extension)
      , sink = buildPath(that.directory, that.name, config.name, that.extension);

    crop(that.path, temp, (h > w) ? w : h, function(err) {
      if (err) callback(err);

      resize(temp, sink, config.width, config.width, function(err) {
        require("fs").unlink(temp, function() {
          callback(err, { path: sink, name: path.basename(sink) });
        });
      });
    })
  });
}

Processor.prototype.setPath = function(pathname) {
  this.path = path.resolve(pathname);
  this.directory = path.dirname(pathname);
  this.extension = path.extname(pathname);
  this.name = path.basename(pathname, this.extension);

  return this;
}

Processor.prototype.size = function(callback) {
  im(this.path).size(callback);
}

Processor.prototype.format = function(callback) {
  im(this.path).format(callback);
}

module.exports = Processor;