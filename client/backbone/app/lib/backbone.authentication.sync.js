Backbone.originalSync = Backbone.sync;
Backbone.sync = function(method, model, opts) {
	var options = opts;
	
	if (Proof && Proof.session) {
	  options = _.extend({ 
	  	headers: { "Authorization": "Basic " + Proof.session.authenticationToken() }
	  }, opts);
  }
	
	return Backbone.originalSync(method, model, options);
};