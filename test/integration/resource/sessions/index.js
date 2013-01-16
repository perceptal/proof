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
          .send({ name: "john", password: "secret", code: "123456" })
          .expect("Content-Type", /json/)
          .expect(200, done);
      });
    });

    describe("invalid user", function() {

      it("should return 404", function(done) {
        request(environment.server.app)
          .post("/api/sessions")
          .send({ name: "johnny", password: "secret", code: "123456" })
          .expect(404, done);
      });
    });

    describe("null user", function() {

      it("should return 403", function(done) {
        request(environment.server.app)
          .post("/api/sessions")
          .expect(404, done);
      });
    });

    describe("null password", function() {

      it("should return 403", function(done) {
        request(environment.server.app)
          .post("/api/sessions")
          .send({ name: "john", code: "123456" })
          .expect(403, done);
      });
    });

    describe("invalid password", function() {

      it("should return 403", function(done) {
        request(environment.server.app)
          .post("/api/sessions")
          .send({ name: "john", password: "password", code: "123456" })
          .expect(403, done);
      });
    });

    describe("invalid code", function() {

      it("should return 404", function(done) {
        request(environment.server.app)
          .post("/api/sessions")
          .send({ name: "john", password: "secret", code: "999999" })
          .expect(404, done);
      });
    });

    describe("null code", function() {

      it("should return 404", function(done) {
        request(environment.server.app)
          .post("/api/sessions")
          .send({ name: "john", password: "secret" })
          .expect(404, done);
      });
    });

  });

});


