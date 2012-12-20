function Repository(store, collection) {
	if (!(this instanceof Repository)) return new Repository(store);

	this.store = store;
	this.store.collection(collection);
}

Repository.prototype.create = function(o, callback) {
	store.create(o, callback);
}

Repository.prototype.update = function(o, callback) {
	store.update(o, callback);
}

Repository.prototype.delete = function(id, callback) {
	store.delete(id, callback);
}

Repository.prototype.get = function(id, callback) {
	store.get(id, callback);
}

Repository.prototype.find = function(query, callback) {
	store.find(query, callback);
}

Repository.prototype.list = function(callback) {
	store.list(callback);
}

module.exports = Repository;