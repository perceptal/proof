var _ = require("underscore")
  , fs = require("fs")
  , path = require("path")
  , config = require("../../../../service/photo/config")
  , Processor = require("../../../../service/photo/processor")
  , source = "test/fixture/photo/image"
  ;

var cleanup = function(path, callback) {
  fs.unlink(path, callback);
}

var test = function(photo, dimension) {

  describe("when processing #" + photo + " (" + dimension.name + ")", function() {

    var that = this
      , original = path.join(source, photo)
      , expected = [ dimension.name, photo ].join(".");

    before(function(done) {
      var sut = new Processor({ path: original });

      sut.square(dimension.name, function(err, result) {
        that.path = result.path;
        that.name = result.name;

        sut.setPath(that.path).size(function(err, size) {
          that.size = size;
          done();
        });
      });
    });

    after(function(done) {
      cleanup(that.path, done);
    });

    it("should have new path", function() {
      that.path.indexOf(path.join(source, expected)).should.not.equal(-1);
    });

    it("should have new name", function() {
      that.name.should.equal(expected);
    });

    it("should create file", function() {
      fs.openSync(that.path, "r");
    });

    it("should be of the correct size", function() {
      that.size.width.should.equal(dimension.width);
    });

    it("should be square", function() {
      that.size.width.should.equal(that.size.height);
    });

  });
}

describe("Photo Processor", function() {

  var photos = _.reject(fs.readdirSync(source), function(file) { return file.indexOf(".") === 0; });

  _.each(_.reject(config, function(dim) { return dim.width === undefined; }), function(dimension) {
    _.each(photos, function(photo) {
      test(photo, dimension);
    });
  });

});