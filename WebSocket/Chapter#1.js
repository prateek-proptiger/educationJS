Chapter-1 (Quick Start)

Why WebSocket ?

Web Applications are based on HTTP. So client hits an HTTP request to the server, server processes it and using its resources generates final response and sends it back to the client. In case when Client need to have real time connection with the Server, earlier Developers used to put hacks (like Long Polling) for their work.

Long Polling mechanism works as the Client sends an HTTP request, Server then holds the request until the time out period and as soon as the result is ready API response is sent back. In case the API is timed out before the response was available OR further communication is required Client has to send the HTTP request again.
