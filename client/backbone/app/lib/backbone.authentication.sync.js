Backbone.originalSync = Backbone.sync;
Backbone.sync = function(method, model, opts) {
	var options = opts;
	console.log(Proof.session)
	if (Proof && Proof.session) {
	  options =  _.extend({ 
	  	headers: { "authorization": "Basic " + Proof.session.authenticationToken() }
	  }, opts);
	}
	
	return Backbone.originalSync(method, model, options);
};