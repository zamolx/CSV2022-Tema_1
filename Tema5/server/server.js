const express = require('express');
const app = express();
const http = require('http');
const port = 3000;
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server);
app.use(express.static(__dirname));

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

server.listen(port, () => {
  console.log(`Server started on port ${port}`)
})

const allResponses = {};

function addResponse(response) {
  if (Object.keys(allResponses).includes(response)) {
    let frequency = Number(allResponses[response])
    allResponses[response] = frequency + 1
  } else {
    allResponses[response] = 1
  }
}

io.on('connection', (socket) => {
  console.log(`[SOCKET CONNECTED] ${socket.id}`);
  socket.emit("connected", allResponses);
  socket.on("chat message", (response) => {
    addResponse(response)
    io.emit("received response", allResponses);
  })
});
