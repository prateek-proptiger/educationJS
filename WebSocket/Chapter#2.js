Chapter-2 (WebSocket API)

WS is an event driven, full duplex asynchronous communication channel for web applications to give real time updates.
WebSocket is initiated by an HTTP request and then converted to by-direction channel for listening events.
Constructor is used as: var ws = new WebSocket('ws://localhost:8181');
Second optional parameter is an array of subprotocols.
If these sub-protocols are not supported by server, connection won’t be established.

If there is an attempt to create a connection to the origin via HTTP using a non-TLS protocol (like 'ws://') a
SECURITY_ERR will be thrown.
Type of protocols supported are 1) Registered 2) Open (XMPP or STOMP) 3) Custom.

After WS connection is established, things are handled based upon four events provided by the WS API namely:
open, message, close and error.

WebSocket Events
----------------
All these events need to be handled with JS using a callback.
  => Open:    When the WS server responds to the connection request, handhsake is complete, the open event fires and connection
              is established. The server is now rady to send and receive signals.
  => Message: Whenever the server sends data, the onmessage handler is executed.
  => Error:   Whenever an error occurs for any reason, errorHandler is executed.
  => Close:   Immediately after some error or forcefull closing, the close handler will be executed.
  => Frame:   WS protocol calls out two types of frames: PING and PONG. PING is sent only by server and PONG is sent in
              response by the browser implementation.

WebSocket Methods
-----------------
  => Send: In order to send messages to the server after the connection is established, use send method as:
        Send data in the callback of onopen event.
        Check for if the connection is active using ws.readyState == WebSocket.OPEN;
  => Close: In order to close the connection, use close method as: ws.close( ). It takes paramters as closing status codes like 1000 (default).

WebSocket Attributes
--------------------
  => ReadyState: Using this attribute we have idea regarding the current state of the WS connection. Constants are:
      WebSocket.CONNECTING: The connection is not yet open.
      WebSocket.OPEN: The connection is open and ready to communicate.
      WebSocket.CLOSING: The connection is in process of closing.
      WebSocket.CLOSED: The connection is closed or couldn’t be opened.
  => BufferedAmount : This attribute is of use to calculate if all the data is transferred before closing the connection.
  => Protocol: Of all the protocols provided as parameter in constructor, the one used can be found in this attribute.

Since WebSocket is a latest technology, it is always advisable to check for if the browser supports ‘WebSocket’ or not.
