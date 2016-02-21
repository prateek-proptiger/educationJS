
=> MVC Basics again:-
Model- How Information is stored.
Controller- How information will be used.
View- How information will be displayed.

=> A basic app of Recipies explained:-
Things to learn:-

$resource

=> How does Angular works with Directives and Controllers ?

First of all HTML browser compiles the template and generate a DOM.
Then comes Angular.
Angular then executes the controller for the current view determined by routes and starts building the Model($scope object).
The directives work in two phases:-
Compile phase:- During this phase Angular searches for all the directives on any particular node and then the DOM manipulation accordingly and finally generates a linking function.
Linking phase:- During this phase, the DOM finally generated after compile phase is merged with the Model object generated via the controller and a view is created.
Also learned how $routeProvider with the help of ‘when’, ‘otherwise’ and the 'resolve' property helps in the route configuration of our Angular app.

=> ng-view:-

When AngularJS detects a route change, it loads the template, attaches the controller to it, and replaces the ngview with the contents of the template.

=> Some other basic form directives usage explained.

=> To study - Unit tests
