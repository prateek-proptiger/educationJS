Chapter-5 (WebSocket Compatibility)

WebSocket reduces the usage of resources on server and provide a consistent connection. Also due to adoption of HTML5 in
client browsers, support is relegated to modern browsers.

SockJS
======
It is a JS library that provides a WebSocket-like object.
It will use WebSocket as its first choice if available, then streaming and finally polling if none available.
Thus provides support for a number of browsers.

To fully use SockJS we need server counterpart. Libraries supported are:
=> SockJS-node        => SockJS-erlang      => SockJS-tornado     => SockJS-twisted
=> SockJS-ruby        => SockJS-netty       => SockJS-gevent      => SockJS-go

SockJS Chat Server
------------------
Requires express, http, sockjs and uuid module.
The events are similar to native WebSocket: connection, data, close and error.
Changes :
=> Now we will be listening for event 'data' instead of 'message'.
=> Earlier WebSocket object had readyState constants attached to it but here we hill have to define them since readyState
   here has integer values attached to it as: CONNECTING = 0, OPEN = 1, CLOSING = 2, CLOSED = 3.
=> send(message) is renamed to write(message).

Now after everything is converted to be handled by SockJS library, we will initialise a new app with Express and bind the
prefix /chat to http.Server instance.

var app = express();
var httpServer = http.createServer(app);
sockServer.installHandlers(httpServer, {prefix:'/chat'});
httpServer.listen(8181, '0.0.0.0');


express.get('/client.html', function (req, res) {
  res.sendfile(__dirname + '/client.html');
});
express.get('/style.css', function (req, res) {
  res.sendfile(__dirname + '/style.css');
});

SockJS Chat Client
------------------
First of all include the SockJS Library.
Now with the help of SockJS library we are not limited to use 'ws://' protocol but instead we can use 'http://' and it
will handle everything internally.
var sockjs = new SockJS("http://127.0.0.1:8181/chat").
SockJS offers support for one/more streaming protocols for major browsers, which all work cross-domain and support cookies.


Socket.IO
=========
Using WebSocket directly is an easy decision when we can control the clients using our system but for most organisations
having to cater to a heterogeneous client environment, another alternative is Socket.IO which provides same functionality
by using technologies irrespective of the browser.
This library falls back to these transports in case WebSocket is not available.
=> Adobe Flash Socket: WebSocket like connection over Adobe Flash. One drawback is to open a new port for policy server.
=> Ajax long polling
=> Ajax multipart streaming
=> Forever iframe
=> JSONP polling

Include socket.io file for working on client.
The four types of events are: connection, message, disconnect and anything.

Socket.IO Chat Server
---------------------
Socket.IO uses open-ended naming of events ,i.e., events are described in code itself. Therefore no need to construct them
within each other.
Instead of readyState of WebSocket, Socket.IO has a number of events which defines the connection status like:
=> connect => disconnect => reconnect_failed => reconnect => reconnecting
=> message => connecting => connection_failed => anything
