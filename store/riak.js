var riak = require("riak-js")
  , configuration = require("../configuration")
  ;

function Store() {
	if (!(this instanceof Store)) return new Store();
	
	this.db = client();
}

var client = function() {
	return riak.getClient(configuration("riak"));
}

Store.prototype.collection = function(name) {
	this.name = name;
}

Store.prototype.create = function(o, callback) {
	callback(null, {});
}

Store.prototype.update = function(o, callback) {
	callback(null, {});
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