var service = require("./service");

var Product = function(name) {
	if (!(this instanceof Product)) return new Product(name);

  // Validation
	this.validator.check(name, "Name is required").notEmpty();

	// Initialise
	this.name = name;
	this.description = "";
}

service.extend(Product, service.Validatable);

module.exports = Product;