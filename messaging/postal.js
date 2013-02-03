var postal = require("postal")(require("underscore"));

var CHANNEL = "default";

module.exports = {

  publish: function(topic, data) {
    postal.publish({ 
      channel: CHANNEL
    , topic: topic
    , data: { topic: topic, data: data }
    });
  }

, subscribe: function(topic, callback) {
    postal.subscribe({
      channel: CHANNEL
    , topic: topic
    , callback: function(data) {
        callback(data.topic, data.data);
      }
    });
  }
}