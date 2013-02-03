var Socket = function(io, messaging) {
  if (!this instanceof Socket) return new Socket(io, messaging);

  this.io = io;
  this.messaging = messaging;
}

Socket.prototype.broadcast = function() {
  var messaging = this.messaging;

  this.io.sockets.on("connection", function(socket) {

    messaging.subscribe("/api/*:update", function(topic, data) {
      console.log(topic, data);
      topic = topic.replace(":", "/" + data.id + ":");

      socket.emit(topic, data);
      socket.broadcast.emit(topic, data);

    });

  });
}

module.exports = Socket;