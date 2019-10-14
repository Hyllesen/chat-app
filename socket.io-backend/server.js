const io = require("socket.io")();
const messageHandler = require("./handlers/message.handler");

let currentUserId = 2;
const users = {};

io.on("connection", socket => {
  console.log("a user connected!");
  console.log(socket.id);
  users[socket.id] = { userId: currentUserId++ };
  socket.on("join", username => {
    users[socket.id].username = username;
    messageHandler.handleMessage(socket, users);
  });
});

io.listen(3001);
