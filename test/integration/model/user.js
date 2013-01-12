var should = require("should")
  , helper = require("../../helper")
  , environment = helper.environment
  ;

describe("User", function() {
  
  var user, data;

  before(function(done) {
    helper.start(done);
  });

  after(function() {

  });

  describe("when created with valid data", function() {
    
    before(function() {
      data = data = helper.fixture("user", "valid");
      user = new environment.models.User(data);
    });

    it("should have email address", function() {
      user.email === data.email;
    });

    it("should have generated id", function() {
      should.exist(user._id);
    });

    it("should have cleartext password", function() {
      user.password === data.password;
    });

    it("should not authenticate", function(done) {
      user.authenticate(data.password, function(err, matches) {
        matches.should.equal(false);
        done();
      });
    });

    describe("after saving", function() {
      before(function(done) {
        user.save(done);
      });

      it("should have hashed password", function(done) {
        user.password !== data.password;
        done();
      });

      it("should authenticate", function(done) {
        user.authenticate(data.password, function(err, matches) {
          matches.should.equal(true);
          done();
        });
      });

      it("should not authenticate invalid password", function(done) {
        user.authenticate("nonsense", function(err, matches) {
          matches.should.equal(false);
          done();
        });
      });
    });

    describe("when created with no password", function() {
      var error;

      before(function(done) {
        data = data = helper.fixture("user", "invalid");
        user = new environment.models.User(data);
        user.save(function(err, user) {
          done();
        });
      });

      it("should have failed required password validation", function() {
        user.errors.password.type.should.equal("required");
      });
    });
  });
  
});