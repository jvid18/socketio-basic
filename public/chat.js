const socket = io();

// DOM Elements
let message = document.getElementById('message'),
		username = document.getElementById('username'),
		btn = document.getElementById('send'),
		output = document.getElementById('output'),
		actions = document.getElementById('actions');

btn.addEventListener('click', () => {
	const data = {
		username: username.value,
		message: message.value
	};
	
	socket.emit('chat:message', data);
});

message.addEventListener('keypress', () => {
	socket.emit('chat:typing', username.value);
});

socket.on('chat:message', ({ username, message }) => {
	actions.innerHTML = '';
	output.innerHTML += `
		<p>
			<string>${username}</string>: ${message}
		</p>
	`
});


socket.on('chat:typing', ( username ) => {
	actions.innerHTML = `
		<p><em>${username} is typing a message...</em></p>
	`;
});
