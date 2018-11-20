const express = require('express');
const http = require('http');
const socketio = require('socket.io');

const app = express();
const server = http.Server(app);
const io = socketio(server);

app.use(express.static('public'));

app.get('/', (request, response) => {
  console.log("I am the home route")
  response.sendFile('index.html');
})

io.on('connection', (socket) => {
  socket.on('chat message', (msg) => {
    io.emit('chat message', msg)
  })
});

server.listen(3000, () => {
  console.log('listening on port 3000')
})

