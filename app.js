function App() {
	if (!(this instanceof App)) return new App();
}

App.prototype.start = function() {
	console.log("start");
}

module.exports = App;