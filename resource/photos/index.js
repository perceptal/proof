module.exports = function(app, models, util, authenticate, authorize) {

  var Photo = models.Photo;

  app.del("/api/photos/:id", function(req, res, next) {
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
