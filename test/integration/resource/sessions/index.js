var should = require("should")
  , request = require("supertest")
  , helper = new (require("../../../helper"))()
  , environment = helper.environment
  ;

describe("/sessions", function() {

  this.timeout(100000);

  before(function(done) {
    helper.init(function() {
      helper.seed("test", done);
    });
  });

  after(function(done) {
    helper.stop(done);
  });

  describe("POST", function() {

    describe("valid authentication details", function() {

      it("should return 200", function(done) {
        request(environment.server.app)
          .post("/api/sessions")
          .send({ username: "john", password: "secret" })
          .expect("Content-Type", /json/)
          .expect(200, done);
      });
    });

    describe("invalid user", function() {

      it("should return 404", function(done) {
        request(environment.server.app)
          .post("/api/sessions")
          .send({ username: "johnny", password: "secret" })
          .expect(404, done);
      });
    });

    describe("invalid password", function() {

      it("should return 403", function(done) {
        request(environment.server.app)
          .post("/api/sessions")
          .send({ username: "john", password: "password" })
          .expect(403, done);
      });
    });

  });

});


