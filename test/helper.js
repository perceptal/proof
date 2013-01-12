var _ = require("underscore")
  , async = require("async")
  , Environment = require("../environment");

var Helper = function() {
  this.environment = new Environment();
}

Helper.prototype.resetDatabase = function(callback) {
  var models = this.environment.models;

  async.forEach(_.keys(models), function(name, cb) {
    var Model = models[name];

    Model.find({}).remove(cb);
  }, callback);
}

Helper.prototype.start = function(callback) {
  var that = this;

  this.environment.start(function() {
    that.resetDatabase(callback);
  });
}

Helper.prototype.stop = function(callback) {
  this.environment.stop(callback);
}

Helper.prototype.seed = function(seed, callback) {

  var that = this
    , data = this.fixture("seed", seed);

  var link = function(file, model, link, prop, callback) {

    var data = this.fixture(file)
      , Model = this.environment.models[model];
      , Link = this.environment.models[link];

    _.each(data, function(item) {

      Model.findOneAndUpdate({ name: item.name }, { name: item.name }, { upsert: true }, function(err, m) {
        _.each(item[prop], function(p) {  
          var thing = _.isObject(p) ? p : { name: p }

          Link.findOneAndUpdate(thing, thing, { upsert: true }, function(err, l) {
            m[prop].push(l);
            if (_.last(item[prop]) === p) {
              m.save(function(err) {
                if (_.last(data) === item) callback();
              });
            }
          });
        });
      });
    });
  }

  async.forEach(data, function(item, cb) {
    link(item.fixture, item.model, item.link, item.property, cb);
  }, callback);

}

Helper.prototype.fixture = function(model, name) {
  return require("./fixture/" + model + "/" + name);
}

module.exports = new Helper();