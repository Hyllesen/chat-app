const io = require("socket.io")();

io.on("connection", () => {
  console.log("a user connected!");
});

io.listen(3001);
