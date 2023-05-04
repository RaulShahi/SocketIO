const express = require("express");
const { createServer } = require("http");
const { Server } = require("socket.io");

const app = express();

const server = createServer(app);
const io = new Server(server);

app.get("/", (req, res, next) => {
  res.sendFile(__dirname + "/index.html");
});

io.on("connection", (socket) => {
  console.log("a user connected");
  socket.on("disconnect", () => {
    console.log("user disconnected");
  });
});

server.listen(5010, (err, succ) => {
  console.log("App starting on port 5010");
});
