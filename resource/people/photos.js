module.exports = function(app, models, authenticate, authorize) {

  var Person = models.Person
    , Photo = models.Photo;

  app.get("/api/people/:person/photos"
  // , authenticate.basic()
  , function(req, res, next) {
      Person.find({}, function(err, people) {
        if (err) return next(err);
        return res.send(200, people);
      });
  });

  app.get("/api/people/:person/photos/:size"
  // , authenticate.basic()
  , function(req, res, next) {

      Photo.findDefault(req.params.person, req.params.size, function(err, photo) {
        
        if (err) return res.send(500);
        if (!photo) return res.send(404);

        photo.download(function(err, image, eTag) {
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
      });
  });

}
