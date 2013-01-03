module.exports = function() {
	var name = arguments[0]
	  , args = Array.prototype.slice.call(arguments, 1);

	return require("./" + name).init.apply(null, args);
}