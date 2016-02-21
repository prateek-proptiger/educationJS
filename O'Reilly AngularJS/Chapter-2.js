
Instead of defining controller in global scope, we should define them in a module.
Keeping things out of globasl scope and maintaining namespaces is a good thing and modules is a mechanism to do so.

How things work :-

When a user hits url to load your application :-
An HTTP request is then sent to the server via browser. Then index.html is loaded onto the user’s client and thus Angular.
After template is fully loaded Angular works on template and looks for bindings and directives.
This results in DOM manipulation and also registering of listener events.
Thus a final DOM is created which is thus a View.

Angular keeps a separation of template and data.

Difference between {{ }} and ng-bind though both produce equivalent results.
To avoid a special problem we should use ng-bind on index page.
Because until the angular is loaded HTML will display the {{ }} on webpage, So in order to avoid that we should use ng-bind instead.

Also important is ng-src
If you are using {{ }} in image sources use ng-src instead of src because browsers are very aggressive in loading images and hence Angular doesn’t get time to bind the data.

Form elements:-
You can use ng-model to bind your form elements with properties.
$watch is for executing a particular callback on the change of any particular scope property.

=> Integrating all your listener events inside HTML is a bad idea becasue it will hurt in case of all client integration of app.

=> Then following directives explained :-
ng-repeat directive which gives us access to $index, $first, $last, $middle, $even and $odd.
ng-hide and ng-show which works on css display property.
ng-class allowing addition of class based upon parameter.
ng-click, ng-controller
ng-model

=> Controllers:
Their main function is to provide the logic for user’s behaviour with the app. We can assign controller to a part of DOM with the help of routes.
In case of nested Controllers, child controller $scope object inherits from parent controller’s $scope.

=> $watch basically provides a notification when your model data changes.
It should be computationally small because of multiple execution due to digest cycle.
function(newValue, oldValue, scope) -> Also provide reference to the scope Object.
Imp: The $watch function returns a function that will de-register the listener when you no longer want to receive change notifications.
Angular runs watch function once again by making a copy of watch properties in order to confirm if the vale has changed as suspected.

=> Modules -With the help of modules we can keep all the dependencies of the app in a separate file. We can create Services, Filters and Directives and we won’t have to include all the code inside Controller.

=> Filters:-
 Filters allow mechanism to transform data according to your view. You can create your own filters too.
Since not worked much with filter here is an example :-
app.filter(’titleCase’, function(){
	var titleCaseFilter = function(input) {
		var words = input.split(‘ ‘);
		for (var i =0; i<words.length; i++) {
			words[i]= words[i].charAt(0).toUppercase() + words[i].slice(1);
		 }
		return words.join(‘ ‘);
	}
	return titleCaseFilter;
}


=> Routes and $location
Though we can update content of webpages using AJAX calls. What if we want to update the view in an SPA.
We use routes. For every URL browser points there should a DOM associated with a controller.
Create routes file and adjust the config -> $routeProvider.when -> Used to point to URLs.

=> $http Service is used for talking to servers. This service returns promise which gets resolved and rejected based upon the HTTP request response.

=> Directives :- A piece of code which can be reused again.

=> Validating Form elements:-
A lot of variables and directives to help this case.
Examples - $valid, $pristine, $dirty, ng-disabled and ng-maxlength.
