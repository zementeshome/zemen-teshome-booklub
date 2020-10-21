const express = require ('express');
const socketio = require('socket.io');
const http = require ('http');

const PORT = process.env.PORT || 8000

const router = require('./router');

const app = express();
const server = http.createServer(app);
const io = socketio(server);

io.on('connection', (socket) => {
socket.on('join', ({ name, room }) => {
    console.log(name, room);
})
console.log('we have a new connection')

socket.on('disconnect', () => {
    console.log('user has left')
})
});


app.use(router);


server.listen(PORT, () => console.log(`running on port ${PORT}`));