Backbone.originalSync = Backbone.sync;
Backbone.sync = function(method, model, opts) {
	var options = opts;
	
	if (Proof && Proof.session) {
	  options =  _.extend({ 
	  	headers: { "authorization": "Basic " + Proof.session.authenticationToken() }
	  }, opts);
	}
	console.log(options);
	return Backbone.originalSync(method, model, options);
};