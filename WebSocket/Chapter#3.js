Chapter-3 (Bidirectional Chat)

Objective is to create a server which can receive requests of connections and messages and then handle them accordingly.

Long Polling
------------
At present, for implementing such things Web relies on Long Polling. In this, an XHR request is sent by client and the
server holds it instead of sending back data immediately and as soon as response is received, client sends another
request and this keeps on continuing. This in turn allows persistent connection with the server and allows data back
and forth. Socket.IO extends WebSocket API and also provides backward compatibility for older browsers.

Basic WebSocketServer written in Node looks like:-

var WebSocketServer = require('ws').Server;
var wss = new WebSocketServer({port: 8181});

wss.on(‘connection’, function(socket) {
  console.log(‘Client connected’);
  socket.on(‘message’, function(message) {
    console.log(‘message’);
  });
});

Node module UUID (Universally Unique Identifier) can be used to differentiate clients.

Next, enhance the connection by identifying the client.

var clients = [ ];
wss.on('connection', function(ws) {
	var client_uuid = uuid.v4();
	clients.push({'id': client_uuid, 'ws': ws});
	console.log('Client [%s] connected', client_uuid);
});

ws.on('message', function(message) {
	for(var i=0; i<clients.length; i++) {
		var clientSocket = clients[i].ws;
		console.log('Client [%s]: %s', clients[i].id, message);
		clientSocket.send(JSON.stringify{
			id: client_uuid,
			message: message
		});
	}
});

Now WSS is ready to receive messages from any connected client. And on any message from client it iterates through all
other connected and sends a JSON string to them which includes clientId and the message.
But we should also check if some client hasn’t left using the readyState of each Socket.
So final code looks like:

var clients = [ ];
wss.on('connection', function(ws) {
	var client_uuid = uuid.v4( );
	clients.push({'id': client_uuid, 'ws': ws});
	console.log('Client [%s] connected', client_uuid);
	ws.on('message', function(message) {
		for(var i=0; i <clients.length; i++) {
			var clientSocket = clients[i].ws;
			if (clientSocket.readyState == WebSocket.OPEN) {
				console.log('Client [%s]: %s', clients[i].id, message);
				clientSocket.send(JSON.stringify{
					id: client_uuid,
					message: message
				});
			}
		}
	});
});

Now we should handle 'close' event as :-
ws.on('close', function( ){
	for(var i=0; i<clients.length; i++) {
		if (clients[i].id == client_uuid) {
			console.log('client [%s] disconnected',client_uuid)
			clients.splice(i,1);
		}
	}
});

WebSocket Client
----------------
