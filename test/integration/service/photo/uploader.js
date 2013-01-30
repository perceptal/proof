var _ = require("underscore")
  , fs = require("fs")
  , path = require("path")
  , should = require("should")
  , Uploader = require("../../../../service/photo/uploader")
  , source = "test/fixture/photo/image"
  ;

var test = function(photo) {

  var cleanup = function(done) {
    this.sut.delete(this.sut.name, done);
  }

  describe("when uploading #" + photo, function() {
    this.timeout(10000);

    var that = this
      , original = path.join(source, photo);

    before(function(done) {
      this.sut = new Uploader({ path: original });

      this.sut.put(function(err) {
        that.err = err;

        done();
      });
    });

    after(cleanup);

    it("should upload without error", function() {
      should.not.exist(that.err);
    });

  });
}

describe("Photo Uploader", function() {
  _.each(_.reject(fs.readdirSync(source), function(file) { return file.indexOf(".") === 0; }), test);
});