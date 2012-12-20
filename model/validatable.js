var Validator = require("validator").Validator;

Validator.prototype.error = function (msg) {
	this._errors.push(msg);
  return this;
}

Validator.prototype.getErrors = function () {
	return this._errors;
}

var Validatable = (function() {
	var _validator = new Validator();

	function isValid() { 
		return _validator.getErrors().length === 0;
	}

	return function() {
		this.isValid = isValid;
		this.validator = _validator;

		return this;
	}
})();

module.exports = Validatable;