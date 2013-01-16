var should = require("should")
  , request = require("supertest")
  , helper = new (require("../../../helper"))()
  , environment = helper.environment
  ;

describe("/people", function() {

  this.timeout(100000);

  before(function(done) {
    helper.init(function() {
      helper.seed("test", done);
    });
  });

  after(function(done) {
    helper.stop(done);
  });

  describe("GET", function() {

    describe("without authorisation", function() {

      it("should return 403", function(done) {
        request(environment.server.app)
          .get("/api/people")
          .expect(403, done);
      });
    });

    describe("with authorisation", function() {

      var token;

      before(function(done) {
        helper.authorize("john", "123456", function(err, t) {
          token = t;
          done();
        });
      });

      it("should return 200", function(done) {
        request(environment.server.app)
          .get("/api/people")
          .set("authorization", token)
          .expect("Content-Type", /json/)
          .expect(200, done);
      });
    });

  });

});


