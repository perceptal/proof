module.exports = function(app, models, util, messaging, cache, authenticate, authorize) {

  var Organisation = models.Group
    , Photo = models.Photo;

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

    Organisation.findAndPopulate({ classifier: "organisation" }, function(err, organisations) {   // PARAMS
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
      , classifier: "organisation"
    });

    organisation.save(function(err, organisation) {
      if (err) return next(err);

      messaging.publish("/api/organisation:create", organisation);
      
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
        
        Photo.setDefault(organisation.id, req.body.defaultPhoto, function(err, photo) {
          findOne(organisation.id, res, next, function(organisation) {
            messaging.publish("/api/organisation:update", organisation);
          });
        });
      });
    });
  });

  app.del("/api/organisations/:id", function(req, res, next) {
    Organisation.findOne({ _id: req.params.id }, function(err, organisation) {
      if (err) return next(err);
      if (organisation == null) return res.send(404);

      organisation.remove(function(err) {
        if (err) return next(err);
        messaging.publish("/api/organisation:delete", organisation);
        return res.send(204);
      });
    });
  });

}
