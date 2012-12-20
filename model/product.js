function Product(name) {
	if (!(this instanceof Product)) return new Product(name);

	this.validator = require("./validator");

  // Validation
	this.validator.check(name, "Name is required").notEmpty();

	this.name = name;
}

Product.prototype.isValid = function() {
	return this.validator.getErrors().length === 0;
}

module.exports = Product;