var _ = require("underscore")
  , async = require("async")
  , Environment = require("../environment");

var Helper = function(shouldReset) {
  this.environment = new Environment();

  this.shouldReset = shouldReset || true;
}

Helper.prototype.resetDatabase = function(callback) {

  if (!this.shouldReset) return callback();

  var models = this.environment.models;

  async.forEach(_.keys(models), function(name, cb) {
    var Model = models[name];

    Model.find({}).remove(cb);
  }, callback);
}

Helper.prototype.init = function(callback) {
 var init = this.environment.init.bind(this.environment)
   , withReset = this.resetDatabase.bind(this, callback);

  init(withReset);
}

Helper.prototype.start = function(callback) {
  var start = this.environment.start.bind(this.environment)
    , withReset = this.resetDatabase.bind(this, callback);

  start(withReset);
}

Helper.prototype.stop = function(callback) {
  this.environment.stop(callback);
}

Helper.prototype.seed = function(seed, callback) {

  var that = this, data = this.fixture("seed", seed);

  var link = function(item, callback) {

    var file = item.fixture
      , model = item.model
      , link = item.link
      , prop = item.property
      , bidirectional = item.bidirectional;

    var build = function(item, options) {
      var o = {};
      _.each(_.keys(item), function(key) {
        if (!_.isArray(item[key])) o[key] = item[key];
      });

      // Link back
      if (options && options.bidirectional) o[model.toLowerCase()] = options.model;

      return o;
    }

    var data = that.fixture("seed", [ seed, file ].join("/"))
      , Model = that.environment.models[model]
      , Link = that.environment.models[link];

    _.each(data, function(item) {

      Model.findOneAndUpdate({ name: item.name }, build(item), { upsert: true }, function(err, m) {
        
        m.markModified("password"); // HACK to force save middleware on user

        _.each(item[prop], function(p) {
          var thing = _.isObject(p) ? p : { name: p }
          
          Link.findOneAndUpdate(thing, build(thing, { bidirectional: bidirectional, model: m }), { upsert: true }, function(err, l) {
            m[prop].push(l);

            if (_.last(item[prop]) === p) {
              m.save(function(err, m) {
                if (_.last(data) === item) callback();
              });
            }
          });
        });
      });
    });
  }

  async.forEachSeries(data, function(item, cb) {
    link(_.defaults(item, { bidirectional: false }), cb);
  }, callback);

}

Helper.prototype.fixture = function(model, name) {
  return require("./fixture/" + model + "/" + name);
}

module.exports = Helper;