var http = require("http")
  , https = require("https")
  , express = require("express")
  , stylus = require("stylus")
  , i18n = require("i18next")
  , configuration = require("./")
  ;

var Server = function() {
  if (!(this instanceof Server)) return new Server();
};

Server.prototype.configure = function(models) {

  var compile = function(str, path) {
    return stylus(str)
      .set("filename", path)
      .set("compress", false)
      .use(require("nib")())
      .define("url", stylus.url({ paths: [ root + "public" ] }))
      .import("nib");
  }

  var root = __dirname + "/../"
    , app = express();

  i18n.init({ 
    resSetPath: "locales/__lng__/__ns__.json" 
  , cookieName: "locale"
  });
  
  app.configure(function() {
    app.set("title", "Proof");
    app.set("views", root + "/views");
    app.set("view engine", "jade");

    app.use(express.favicon(root + "public/img/logo.png"));

    app.use(express.bodyParser());
    app.use(express.cookieParser());
    app.use(express.methodOverride());
    app.use(i18n.handle);

    app.use(stylus.middleware({
        debug:    true
      , src:      root + "views"
      , dest:     root + "public"
      , force:    true
      , compile:  compile
    }));

    app.use("/vendor", express.static(root + "components"));
    app.use("/locales", express.static(root + "locales"));
    app.use(express.static(root + "public"));
    app.use(express.static(root + "client/" + configuration("client") + "/app"));

    app.use(function(err, req, res, next) {
      console.error(err, err.status, err.stack);
      res.send(err.status || 500, err.message);
    });

    app.use(app.router);

    i18n.registerAppHelper(app);
    i18n.serveClientScript(app)
      .serveDynamicResources(app)
      .serveMissingKeyRoute(app);
  });

  app.configure("development", function() {
    app.use("/test", express.static(root + "client/" + configuration("client") + "/test"));
    app.use(express.errorHandler({
        showStack: true
      , dumpExceptions: true
    }));
    app.use(express.logger({ format: "\u001b[1m:method\u001b[0m \u001b[33m:url\u001b[0m :response-time ms" }));
  });

  app.configure("test", function() { 
    app.use("/test", express.static(root + "client/" + configuration("client") + "/test"));
  });

  app.configure("production", function() {
    app.use(express.logger({ format: "\u001b[1m:method\u001b[0m \u001b[33m:url\u001b[0m :response-time ms" }));
  });

  this.app = app;
}

Server.prototype.start = function(callback) {
  this.httpServer = http.createServer(this.app);
  // this.io = require("socket.io").listen(this.httpServer);
  this.httpServer.listen(configuration("port"), callback);
  // this.httpsServer = https.createServer(options, app).listen(443);
}

Server.prototype.stop = function(callback) {
  this.httpServer.close(callback);
}

module.exports = Server;