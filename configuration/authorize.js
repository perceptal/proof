var Authorize = function(thing, models) {
  if (!this instanceof Authorize) return new Authorize(thing);

  if (thing == null) thing = "";

  this.Claim = models.Claim;
  this.User = models.User;
  this.thing = thing.toLowerCase();
}

var map = function(method) {
  var map = {
    POST: "create"
  , GET: "read"
  , PUT: "update"
  , DELETE: "delete"
  }
  
  return map[method];  
}

Authorize.prototype.can = function() {
  return function(res, req, next) {

    if (this.right === undefined) this.right = map(res.method);

    next();

  }.bind(this);
}

Authorize.prototype.create = function(thing) {
  this.right = "POST";
  if (thing !== undefined) this.thing = thing;

  return can();
}

Authorize.prototype.read = function(thing) {
  this.right = "GET";
  if (thing !== undefined) this.thing = thing;
  
  return can();
}

Authorize.prototype.update = function(thing) {
  this.right = "PUT";
  if (thing !== undefined) this.thing = thing;
  
  return can();
}

Authorize.prototype.delete = function(thing) {
  this.right = "DELETE";
  if (thing !== undefined) this.thing = thing;
  
  return can();
}

module.exports = Authorize;