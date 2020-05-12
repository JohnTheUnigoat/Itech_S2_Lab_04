const express = require('express');
const socket = require('socket.io')

const app = express();

const server = app.listen(80);

const io = socket(server);

app.use(express.static('static'));

io.on('connection', socket => {
    console.log('User connected!');

    socket.on('message', (message) => {
        io.sockets.emit('message', message);
    })
});
