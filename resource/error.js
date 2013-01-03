var log = require("../logger")
  , restify = require("restify");

var notFound = function(err, data) {
	log.error(err);

	return new restify.ResourceNotFoundError(data + " not found");
}

var invalidContent = function(err, data) {
	log.error(err);

	return new restify.InvalidContentError(data);
}

var internal = function(err, data) {
	log.error(err);

	return new restify.InternalError(data);
}

module.exports = {
		notFound: notFound
	, invalidContent: invalidContent
	, internal: internal
}