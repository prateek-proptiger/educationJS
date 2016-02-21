Source => "https://www.youtube.com/watch?v=8aGhZQkoFbQ"

=> V8 is a JS Runtime. A Runtime inside Chrome.
V8 doesn’t have timeout, which is one of the common things while using JS.

=> Browser provides :- V8 Engine, WebAPIs (like DOM, XHR and setTimeOut) and CallBack Queue (onClick, onLoad and onDone).

=> JS is single threaded => Single CallStack => One stack at a time.
Call Stack basically records where in the code we are.

=> Functions like :-
function foo () {
  return foo();
};
Basically kills the Call Stack.

=> What happens when things are slow?
Suppose AJAX requests are synchronous. Then whenever we hit a request browser is tuck and cant do anything until response
is received.
Solution is asynchronous callbacks.

Example:-

console.log('Hi');
setTimeOut(function cb(){
  console.log('There');
}, 5000)
console.log('Hello');

setTimeOut callback magically comes in the stack after 5 secs.

=> Concurrency and the Event Loop
JS (or the Runtime) can do only thing at a time. The reason we can do more than one thing at a time is that browser is more than
just Runtime. It has WebAPIs as mentioned above which are effectively threads.

So how above code executes is :-

First console.log('Hi') goes to CallStack and logs 'Hi'.
Then setTimeOut callback is sent to WebAPIs stack and a Timer(cb) starts.
Then console.log('Hello') goes to CallStack and logs 'Hello'.
Finally after 5 secs WebAPIs stack pushes setTimeOut callback to the task queue and when CallStack is empty,
Event loops starts which starts pushing task queue elements to the CallStack.

* Remember for the callbacks to execute the stack has to be clear/empty.

Similarly for AJAX requests the callback is send to WebAPIs stack as XHR(cb).

From the example its clear that setTimeOut doesnt guarantee execution at a particular time. It just pushes the callback in
queue after the time specified and waits for CallStack to be empty.



Difference between JS and PHP.
JS:- The code is stored in memory and based on events the required code is run.
PHP:- The entire script loads everytime.
