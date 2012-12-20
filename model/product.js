var Product = function(name) {
	if (!(this instanceof Product)) return new Product(name);

  // Validation
	this.validator.check(name, "Name is required").notEmpty();

	// Initialise
	this.name = name;
	this.description = "";
}

module.exports = Product;