function App(store) {
	if (!(this instanceof App)) return new App(store);

	this.store = store;
}

App.prototype.start = function() {

}

module.exports = App;