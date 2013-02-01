var should = require("should")
  , async = require("async")
  , helper = new (require("../../helper"))()
  , environment = helper.environment
  ;

describe("Group", function() {
  
  var group, data;

  before(function(done) {
    helper.init(done);
  });

  after(function(done) {
    helper.stop(done);
  });

  describe("when created with valid data", function() {
    
    before(function(done) {
      group = new environment.models.Group({ name: "root", code: "000000", securityKey: { low: 0, high: 9999999 }});
      group.save(done);
    });

    it("should have name", function() {
      group.name.should.equal("root");
    });

    it("should have code", function() {
      group.code.should.equal("000000");
    });

    it("should have level", function() {
      group.level.should.equal(0);
    });

    it("should have security key", function() {
      group.securityKey.low.should.equal(0);
      group.securityKey.high.should.equal(9999999);
    });

    it("should have generated id", function() {
      should.exist(group._id);
    });

    describe("with one child", function() {
      
      var first, second, third;

      before(function(done) {
        first = new environment.models.Group({ name: "first", code: "000001", parent: group });
        second = new environment.models.Group({ name: "second", code: "000002", parent: group });
        third = new environment.models.Group({ name: "third", code: "000003", parent: group });

        async.forEachSeries([ first, second, third ], function(child, cb) {
          child.save(cb);
        }, done);

      });

      it("should generate levels correctly", function() {
        first.level.should.equal(1);
        second.level.should.equal(1);
        third.level.should.equal(1);
      });

      it("should generate first keys correctly", function() {
        first.securityKey.low.should.equal(0);
      });

      it("should generate second keys correctly", function() {
        second.securityKey.low.should.equal(first.securityKey.high + 1);
      });

      it("should generate third keys correctly", function() {
        third.securityKey.low.should.equal(second.securityKey.high + 1);
      });

    });

  });
  
});