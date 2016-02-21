
=> IDE - Integrated Development Environment is a software application which helps software engineers in developing applications.
JavaScript has many editors namely Webstorm, Atom and Sublime.
WebStorm is the only IDE with AngularJS plugin.

=> Running your application;-

With Yeoman: Just run yeoman server, will create a server and automatically refresh browser whenever changs made in code.
Without Yeoman:  You will need to configure a web server on your own. Expess is the simplest tool to be used. And this configuration could be run with the help of Node or Python.

=> Unit Test Cases -
Karma is an efficient Test Runner. It is configured by NPM and NodeJs. Install Karma.
karma init - Getting your config file up.
karma start - Starting Karma server.
karma run - Runs test cases.

=> Minifying :-
So as to decrease the file size, So that it could be loaded on user’s browser fast.
We can use Google Closure but it gives normal minfication. For advanced you have to be more careful. Like using injector or array notation in case of controllers.=>

=> Debugging :-
For debugging purposes Chrome developer tools are very useful. Or you can use external plug-ins like Batarang.

=> Benefits with Yeoman:-

Adding a new Route is just as simple as => yeoman init angular:route routeName
In built server.
Running test cases is just as easy as => yeoman test
Building by => yeoman build

=> RequireJS :-

it is an asynchronous load-management tool which maintains that all your specified files are loaded before your script gets executed.

Need to learn how RequireJS works.
And then integrate it with Karma.
