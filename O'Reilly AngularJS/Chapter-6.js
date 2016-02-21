
=> Syntax for using Directives based upon various Validators:-

HTML => namespace-directive
XML => namespace:directive
HTML5 => data-namespace-directive
xHTML => x-namespace-directive
namespaces are used in order to avoid name collisions with angular’s directives.

=> $templateCache is used to cache any particular template in any HTML file. This is done in run file. This is done to put all templates in a single file at the time of build so as to reduce the GET requests.

=> Directive definition properties:-

restrict:- Declaration style for the directive A,E,C,M. By-default: A.
priorities:- To be used when there are multiple directives on a DOM element and order of execution matters. By-default: 0. These are used rarely, one possible could be ng-repeat.
template:- Replacement DOM elements manually. Used for very small HTML.
templateUrl:- Replacement DOM elements to be replaced with a file obtained by server with given URL.
replace:- Accepts boolean signifying if you want to replace original directive element with template HTML.
transclusion:- In addition to replacing or appending content we can move inside directive content. As when template: '<div>Hi there <span ng-transclude></span></div>' is used as <div hello>Bob</div> => Hi there Bob.
compile:- compile function refers to the phase where Angular is compiling and parsing all the directives in the scope of ng-app. Then it returns a linking function. Entire DOM manipulation takes place in this phase.
link:- link function refers to the phase where Angular is binding all the data obtained from the Model to the template to create the final View.
Compile functions execute only once in the compile phase whereas link function is executed for each instance of the directive.
Link function gets access to scope whereas compile doesn’t. This point gives an idea about the order of execution of these functions.
Compile =>Controller =>PreLink =>PostLink.
scopes:- We need to access scope from the directive in order to notify Angular about the changes in model properties. There are three types of scops =>
scope: false => Existing scope used.
scope: true => A new scope created.
scope: {} => A new isolated scope created. Often used for reusable components where we don’t want to inherit anything from the parent scope. In this we don’t have access to parent scope but if we want to share something {‘=’,’@’,’&’} binding strategies can be used.
	= :- Data binding to a variable inside directive.
	@ :- Value passed as a literal.
	& :- A function passed inside directive scope.
DOM Manipulation :- In the link/compile funciton references to the native DOM element is provided as 'element'. These are the same API’s as provided by jQuery. Also angular.element provides API’s.
controllers:- Need to study
