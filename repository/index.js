function Repository(store, collection) {
	if (!(this instanceof Repository)) return new Repository(store);

	this.store = store;
	this.store.collection(collection);
}

Repository.prototype.create = function(o, callback) {
	this.store.create(o, callback);
}

Repository.prototype.update = function(o, callback) {
	this.store.update(o, callback);
}

Repository.prototype.delete = function(id, callback) {
	this.store.delete(id, callback);
}

Repository.prototype.get = function(id, callback) {
	this.store.get(id, callback);
}

Repository.prototype.find = function(query, callback) {
	this.store.find(query, callback);
}

Repository.prototype.list = function(callback) {
	this.store.list(callback);
}

module.exports = Repository;