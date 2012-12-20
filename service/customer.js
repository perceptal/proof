function Customer = function(Repository, store) {
	if (!(this instanceof Customer)) return new Customer(store);

	this.repo = new Repository("customer", store);
}

module.exports = Customer;