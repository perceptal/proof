var _ = require("underscore")
  , mongoose  = require("mongoose")
  , Schema    = mongoose.Schema;

module.exports = function(connection) {

  var GroupSchema = new Schema({
      name              : { type: String, required: true, lowercase: true, index: true }
    , code              : { type: String, required: true, lowercase: true, index: true }
    , securityKey       : { low: { type: Number }, high: { type: Number }}
    , level             : { type: Number, default: 0 }
    , parent            : { type: Schema.ObjectId, ref: "group" }
    , children          : [ { type: Schema.ObjectId, ref: "group" }]
    , people            : [ { type: Schema.ObjectId, ref: "user" } ]
    , roles             : [ { type: Schema.ObjectId, ref: "role" } ]
  });

  var find = function(query, find, callback) {
    find(query)
      .populate("parent")
      .populate("roles")
      .exec(callback);
  }

  GroupSchema.statics.findOneAndPopulate = function(query, callback) {
    find(query, this.findOne.bind(this), callback);
  }

  GroupSchema.statics.findAndPopulate = function(query, callback) {
    find(query, this.find.bind(this), callback);
  }

  GroupSchema.pre("save", function(next) {
    var QUOTAS = [ 1, 100000, 1000 ]
      , group = this
      , Group = connection.model("group", GroupSchema);

    Group.findOne({ _id: group.parent }).populate("children", "id", { _id: { $ne: group.id }}).exec(function(err, parent) {
      if (err) return next(err);
      if (!parent) return next();

      group.level = parent.level + 1;

      var key = parent.securityKey
        , range = (key.high / QUOTAS[group.level])
        , count = parent.children.length;

      group.securityKey = { 
        low  : parseInt(((count * range) + key.low), 10)
      , high : parseInt((((count + 1) * range) + key.low - 1), 10)
      };

      // Link back
      parent.children.push(group);
      parent.save(next)
    });
  });

  return GroupSchema;
}
