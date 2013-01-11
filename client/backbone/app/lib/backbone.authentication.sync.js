Backbone.originalSync = Backbone.sync;
Backbone.sync = function(method, model, opts) {
	var options = opts;
	
	if (Proof && Proof.Global.session) {
	  options = _.extend({ 
	  	headers: { "Authorization": "Basic " + Proof.Global.session.authenticationToken() }
	  }, opts);
  }
	
	return Backbone.originalSync(method, model, options);
};