var should = require("should")
  , helper = new (require("../../helper"))()
  , Uploader = require("../../../service/photo/uploader")
  , environment = helper.environment
  ;

describe("Photo", function() {
  this.timeout(10000);

  var photo, data;

  before(function(done) {
    helper.init(done);
  });

  after(function(done) {
    helper.stop(done);
  });

  describe("when created with valid data", function() {
    
    before(function() {
      data = helper.fixture("photo", "valid");
      photo = new environment.models.Photo(data);
    });

    after(function(done) {
      new Uploader({ path: photo.name }).delete(done);
    });

    describe("after saving", function() {
      before(function(done) {
        photo.save(done);
      });

      it("should have changed name", function() {
        photo.name.should.equal("thumbnail.test.jpg");
      });

      it("should have content type", function() {
        photo.contentType.should.equal("image/jpeg");
      });

      describe("after downloading", function() {

        var image;

        before(function(done) {
          photo.download(function(err, data) {
            image = new Buffer(data);
            done();
          });
        });

        it("should return image", function() {
          image.length.should.not.equal(0);
        });
      });
    });
  });
});