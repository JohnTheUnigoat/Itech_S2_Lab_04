var socket = io()

var username = document.getElementById("username");
username.value = window.sessionStorage.getItem('username');

var message = document.getElementById("message-text");

var button = document.getElementById("send-btn");

button.addEventListener('click', () => {
    if (username.value == '')
    {
        alert('Please enter your username!');
        return;
    }

    window.sessionStorage.setItem('username', username.value);

    if (message.value != ''){
        console.log('Sending a message...');
        socket.emit('message', {
            message: message.value,
            username: username.value
        });
        message.value = '';
    }
});
