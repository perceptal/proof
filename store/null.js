function Store() {
	if (!(this instanceof Store)) return new Store();
}

Store.prototype.collection = function(name) {
	this.name = name;
}

Store.prototype.create = function(o, callback) {
	callback(null, o);
}

Store.prototype.update = function(o, callback) {
	callback(null, o);
}

Store.prototype.delete = function(id, callback) {
	callback(null);
}

Store.prototype.get = function(id, callback) {
	callback(null, {});
}

Store.prototype.find = function(query, callback) {
	callback(null, []);
}

Store.prototype.list = function(callback) {
	callback(null, []);
}

module.exports = Store;