
Google after developing web-applications like Gmail and Google Maps wanted to develop something that focusses more on creativity rather basic browser behaviours.
So they developed a framework of JavaScript -> Angular. They enhanced the common functionalities by using the basic ones of Javascript and HTML.

Multi-Page Applications -> Based upon the URL hit, HTML is generated on server and then the data is mapped to it generating the final page which is then rendered to the browser.
Whereas SPA’s (AJAX applications) - HTML is being sent to the client. Then based upon AJAX calls data is sent to browser where JS is run on browser and portions of page updated.
Therefore the role of servers is only to serve as static resources i.e. HTML and data.
Specify a controller and it is executed automatically without any specific callback. No classes or ids required.

=> ANGULAR BASE
——————————

1. MVC - (An application structure)
It is involved whenever there is interface logic.
Only thing it states is that there should be clear separation between MODEL(managing the data), VIEW(interface) and CONTROLLER(application logic).

Angular too follows MVC.
In Angular=> view is DOM, model is Objects and controllers are JavaScript Classes

2. Data Binding - (Any change in UI linked to JS properties)
First in server-side applications PHP, Rails was famous as it helped in creating HTML then combining data and finally rendering page.
This was extended to client with jQuery as with AJAX calls you update a portion of UI as callback.
But for updating both UI and JS properties according to an event we need to write code.
With Angular’s data binding there is a sync between UI and JS properties.

3. Dependency Injection - (Anything you want just ask)
Instead of creating we just ask for dependencies.

4. Directives - (Your own tags and attributes)
We can write our own templates in HTML as at the core of the framework there is a DOM transformation engine.
Angular comes up with a number of pre-defined directives which can be used for ease of work.
