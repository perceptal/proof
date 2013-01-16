var configuration = require("../../configuration");

module.exports = function(app) {

  app.get("/api/sessions/config", function(req, res, next) {
    res.send(200, configuration("authentication"));
  });
}
