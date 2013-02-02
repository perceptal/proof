module.exports = function(app, models, util, authenticate, authorize) {

  var Organisation = models.Group;

  var findOne = function(id, res, next) {
    Organisation.findOneAndPopulate({ _id: id }, function(err, organisation) {     
      if (err) return next(err);
      if (organisation == null) return res.send(404);

      return res.send(200, organisation);
    });
  }

  app.get("/api/organisations"
  , authenticate.basic()
  , authorize.can()
  , function(req, res, next) {

      Organisation.findAndPopulate({}, function(err, organisations) {   // PARAMS
        if (err) return next(err);
        return res.send(200, organisations);
      });
  });

  app.get("/api/organisations/:id"
  , authenticate.basic()
  , authorize.can()
  , function(req, res, next) {

      return findOne(req.params.id, res, next);
  });

  app.post("/api/organisations", function(req, res, next) {
    var organisation = new Organisation({
        description: req.body.description
      , code: req.body.code
    });

    organisation.save(function(err, organisation) {
      if (err) return next(err);
      
      return findOne(organisation.id, res, next);
    });
  });

  app.put("/api/organisations/:id", function(req, res, next) {
    
    Organisation.findOne({ _id: req.params.id }, function(err, organisation) {
      if (err) return next(err);
      if (organisation == null) return res.send(404);

      util.set(organisation, req.body, [ "description", "code" ]);

      organisation.save(function(err) {
        if (err) return next(err);
        
        return findOne(organisation.id, res, next);
      });
    });
  });

  app.del("/api/organisations/:id", function(req, res, next) {
    Organisation.findOne({ _id: req.params.id }, function(err, organisation) {
      if (err) return next(err);
      if (organisation == null) return res.send(404);

      organisation.remove(function(err) {
        if (err) return next(err);
        return res.send(204);
      });
    });
  });

}