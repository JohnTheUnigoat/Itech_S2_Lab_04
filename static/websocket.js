var socket = io()

var username = document.getElementById("username");
username.value = window.sessionStorage.getItem('username');

var messages = document.getElementById("messages");

var message = document.getElementById("message-text");
var button = document.getElementById("send-btn");

message.addEventListener("keydown", e => {
    if (e.keyCode === 13 || e.keyCode === 13) {
        if (e.ctrlKey){
            message.value += '\n';
            return;
        }
        e.preventDefault();
        button.click();
    }
});

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
            body: message.value,
            username: username.value
        });
        message.value = '';
    }
});

socket.on('message', (message) => {
    console.log('Message received from server!');

    let messageDiv = document.createElement('div');
    if (message.username == username.value) {
        messageDiv.className = 'my-message';
    }
    else {
        messageDiv.className = 'message';
        messageDiv.innerHTML = `<p><b>${message.username}</b></p>`;
    }

    messageDiv.innerHTML += `<p>${message.body}</p>`;

    messages.appendChild(messageDiv);
});
