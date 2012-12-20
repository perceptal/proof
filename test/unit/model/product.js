var Product = require("../../../model/product");

describe("Product", function() {
	
	var product;

	describe("valid data", function() {
  	
  	before(function() {
	  	product = new Product("Bag");
  	});

  	it("should have name", function() {
	  	product.name.should.equal("Bag");
  	});

  	it("should be valid", function() {
	  	product.isValid().should.equal(true);
  	});
	});
	
	describe("empty data", function() {
  	
  	before(function() {
	  	product = new Product(); 
  	});

  	it("should be invalid", function() {
			product.isValid().should.equal(false);
  	});
	});
	
});