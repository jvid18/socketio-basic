import SocketIO from 'socket.io';

let io;

const init = (s) => {
	io = SocketIO(s);	

	io.on('connection', (socket) => {
		console.log('New connection', socket.id);

		socket.on('chat:message', (data) => {
			io.sockets.emit('chat:message', data);
			console.log(data);
		});

		socket.on('chat:typing', (username) => {
			socket.broadcast.emit('chat:typing', username);
		});
	});
}

export default init;
