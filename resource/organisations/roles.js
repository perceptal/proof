module.exports = function(app, models, util, authenticate, authorize) {

  app.get("/api/organisations/:organisation/roles"
  , authenticate.basic()
  , authorize.can()
  , function(req, res, next) {

    return res.send(200);
  });

  app.post("/api/organisation/:organisation/roles", function(req, res, next) {

    return res.send(200);
  });

  app.put("/api/organisations/:organisation/roles/:id", function(req, res, next) {
    
    return res.send(200);
  });

  app.del("/api/organisations/:organisation/roles/:id", function(req, res, next) {

    return res.send(204);
  });

}
