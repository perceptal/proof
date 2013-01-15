var passport = require("passport")
  , Uploader = require("../../service/photo/uploader")
  ;

module.exports = function(app, models) {

  var Person = models.Person
    , Photo = models.Photo;

  app.get("/api/people/:person/photos"
  , passport.authenticate("basic", { session: false })
  , function(req, res, next) {
      Person.find({}, function(err, people) {
        if (err) return next(err);
        return res.send(200, people);
      });
  });

  app.get("/api/people/:person/photos/:size"
  // , passport.authenticate("basic", { session: false })
  , function(req, res, next) {

      Photo.findDefault(req.params.person, req.params.size, function(err, photo) {
        
        if (err) return res.send(500);
        if (!photo) return res.send(404);

        new Uploader({ path: photo.name }).get(function(err, image) {
          if (err) return res.send(404);

          res.set("Content-Type", photo.contentType);
          res.write(image, encoding="binary");
          return res.end();
        });
      });
  });

}
