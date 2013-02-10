var path = require("path");

module.exports = function(app, models, util, messaging, cache, authenticate, authorize) {

  var Person = models.Person
    , Document = models.Document;

  var download = function(err, doc, res, next) {
    if (err) return res.send(500);
    if (!doc) return res.send(404);

    doc.download(function(err, file, eTag) {
      if (err) return res.send(404);

      var expires = new Date();
      expires.setMonth(expires.getMonth() + 1);

      res.set({ 
        "Content-disposition": "attachment; filename=" + doc.name
      , "Content-Type": doc.contentType
      , "Expires": expires.toUTCString()
      , "ETag": eTag
      });
      res.write(file, encoding="binary");
      return res.end();
    });
  }

  app.get("/api/:owner/:ownerid/documents"
  // , authenticate.basic()
  , function(req, res, next) {
    Document.find({ owner: req.params.ownerid }, function(err, documents) {
      if (err) return next(err);
      return res.send(200, documents);
    });
  });

  app.get("/api/documents/:id/download"
  // , authenticate.basic()
  , function(req, res, next) {
    Document.findOne({ _id: req.params.id }, function(err, doc) {
      return download(err, doc, res, next);
    });
  });

  app.post("/api/:owner/:ownerid/documents"
  , function(req, res, next) {
    
    if (req.files.file.size === 0) return res.send(500);

    var doc = new Document({ 
      title: req.body.title
    , owner: req.body.owner
    , name: req.files.file.path
    , contentType: req.files.file.type
    , extension: path.extname(req.files.file.name)
    });

    doc.save(function(err, doc) {
      if (err) return res.send(500);  
      res.send(200, doc);
    });
  });

  app.del("/api/:owner/:ownerid/documents/:id", function(req, res, next) {

    Document.findOne({ _id: req.params.id }, function(err, doc) {
      if (doc == null) return res.send(404);
      if (err) return next(err);

      doc.remove(function(err) {
        if (err) return next(err);

        return res.send(204);
      });
    });
  });
}
