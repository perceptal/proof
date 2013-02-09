var path = require("path");

module.exports = function(app, models, util, messaging, cache, authenticate, authorize) {

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

  app.get("/api/:owner/:ownerid/photos"
  // , authenticate.basic()
  , function(req, res, next) {
      Photo.find({ owner: req.params.ownerid }, function(err, photos) {
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

  app.get("/api/:owner/:ownerid/photos/default"
  // , authenticate.basic()
  , function(req, res, next) {
      Photo.findOne({ owner: req.params.ownerid, isDefault: 1 }, function(err, photo) {
        if (err) res.send(500);
        res.send(200, photo);
      });
  });

  app.get("/api/:owner/:ownerid/photos/view/:size"
  // , authenticate.basic()
  , function(req, res, next) {
      Photo.findDefault(req.params.ownerid, function(err, photo) {
        return download(err, photo, req.params.size, res, next);
      });
  });

  app.post("/api/:owner/:ownerid/photos"
  , function(req, res, next) {
    
    if (req.files.file.size === 0) return res.send(500);

    var photo = new Photo({ 
      caption: req.body.caption
    , owner: req.body.owner
    , name: req.files.file.path 
    });

    photo.save(function(err, photo) {
      if (err) return res.send(500);  
      res.send(200, photo);
    });
  });

  app.del("/api/:owner/:ownerid/photos/:id", function(req, res, next) {

    Photo.findOne({ _id: req.params.id }, function(err, photo) {
      if (photo == null) return res.send(404);
      if (err) return next(err);

      photo.remove(function(err) {
        if (err) return next(err);

        return res.send(204);
      });
    });
  });
}
