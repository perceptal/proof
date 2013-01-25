module.exports = function(app, models, authenticate, authorize) {

  var Person = models.Person
    , Photo = models.Photo;

  var download = function(err, photo, size, res, next) {
    if (err) return res.send(500);
    if (!photo) return res.send(404);

    photo.download(size, function(err, image, eTag) {
      if (err) return res.send(404);

      var expires = new Date();
      expires.setMonth(expires.getMonth() + 1);

      res.set({ 
        "Content-Type": photo.contentType
      , "Expires": expires.toUTCString()
      , "ETag": eTag
      });
      res.write(image, encoding="binary");
      return res.end();
    });
  }

  app.get("/api/people/:person/photos"
  // , authenticate.basic()
  , function(req, res, next) {
      Photo.find({ person: req.params.person }, function(err, photos) {
        if (err) return next(err);
        return res.send(200, photos);
      });
  });

  app.get("/api/photos/:id/view/:size"
  // , authenticate.basic()
  , function(req, res, next) {
      Photo.findOne({ _id: req.params.id }, function(err, photo) {
        return download(err, photo, req.params.size, res, next);
      });
  });

  app.get("/api/people/:person/photos/view/:size"
  // , authenticate.basic()
  , function(req, res, next) {
      Photo.findDefault(req.params.person, function(err, photo) {
        return download(err, photo, req.params.size, res, next);
      });
  });

}
