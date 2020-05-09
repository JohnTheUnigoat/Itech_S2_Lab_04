var socket = io()

var username = document.getElementById("username");
var message = document.getElementById("message-text");

var button = document.getElementById("send-btn");

button.addEventListener('click', () => {
    socket.emit('message', {
        message: message.value,
        username: username.value
    });
});
