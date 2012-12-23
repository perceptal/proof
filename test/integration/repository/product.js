var Repository = require("../../../repository")
  , Store = require("../../../store/null")
  , Product = require("../../../model/product");
  ;

describe("Product Repository", function() {

	var repo, product = new Product("test"), created;

	before(function() {
		repo = new Repository(new Store(), "product")
	});

	describe("create", function() {

		before(function(done) {
			repo.create(product, function(err, o) {
				created = o;
				done();
			});
		});

		it("should return product", function() {
			created.should.equal(product);
		});

	});

});