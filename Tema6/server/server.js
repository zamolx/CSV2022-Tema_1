const express = require('express');
const app = express();
const http = require('http');
const { type } = require('os');
const port = 3000;
const server = http.createServer(app);
const { Server } = require("socket.io");
const Color = require('./helpers/colors');
const Matrix = require('./helpers/matrix')
const io = new Server(server);
app.use(express.static(__dirname));

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

server.listen(port, () => {
  console.log(`Server started on port ${port}`)
})

const matrix = new Matrix();
let notes = matrix.matrix();

io.on('connection', (socket) => {
  console.log(`[SOCKET CONNECTED] ${socket.id}`);
  socket.emit("connected", notes);
  socket.on("send note", (response) => {
    notes = matrix.getMatrix(response)
    io.emit("received response", notes);
  })
});
