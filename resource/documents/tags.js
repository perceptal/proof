module.exports = function(app, models, util, messaging, cache, authenticate, authorize) {

  var Document = models.Document;

  app.get("/api/documents/tags"
  , function(req, res, next) {

    Document.distinct("tags", { }, function(err, tags) {
      if (err) return next(err);
      return res.send(200, tags);
    });
  });
}
