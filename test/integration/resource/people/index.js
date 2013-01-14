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

  describe("without authorisation", function() {

    it("should return 401", function() {
      request(environment.server.app)
        .get("/api/people")
        .expect(401)
        .end(function(err, res) {
          if (err) throw err;
        });
    });
  });

  describe("with authorisation", function() {

    var token;

    before(function(done) {
      helper.authorise("john", function(err, t) {
        token = t;
        done();
      })
    });

    it("should return json", function() {
      request(environment.server.app)
        .get("/api/people")
        .set("authorization", token)
        .expect("Content-Type", /json/)
        .expect("Content-Length", "20")
        .expect(200)
        .end(function(err, res) {
          if (err) throw err;
        });
    });
  });

});


