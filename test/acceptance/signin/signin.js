var Browser = require("zombie")
  , should = require("should")
  , helper = new (require("../../helper"))()
  , environment = helper.environment
  ;

describe("Signin", function() {
  this.timeout(10000);

  before(function(done) {
    helper.start(done);
  });

  after(function(done) {
    helper.stop(done);
  });

  describe("visit", function() {
    var browser = null;

    before(function(done) {
      browser = new Browser({ site: helper.baseUrl });
      browser.visit("/").then(done, done);
    });

    it("should load the page", function() {
      browser.location.pathname.should.equal("/");
    });

    it("should return status 200", function() {
      browser.statusCode.should.equal(200);
    });
  });
});