module.exports = function(app, models, util, messaging, cache, authenticate, authorize) {

  var Role = models.Role;

  app.get("/api/organisations/:organisation/roles"
  , authenticate.basic()
  , authorize.can()
  , function(req, res, next) {

    Role.find({ group: req.params.organisation }, function(err, roles) {
      if (err) return res.send(500);
      return res.send(200, roles);
    });
  });

  app.post("/api/organisations/:organisation/roles", function(req, res, next) {

    var role = new Role({
        group: req.body.organisation
      , name: req.body.name
    });

    role.save(function(err, role) {
      if (err) return next(err);
      
      return res.send(200, role);
    });
  });

  app.put("/api/organisations/:organisation/roles/:id", function(req, res, next) {

    return res.send(200);
  });

  app.del("/api/organisations/:organisation/roles/:id", function(req, res, next) {

    return res.send(204);
  });

}
