Chapter -7

$location :- It is a wrapper around window.location.
Why $location if we already have window.location =>
It removes the global state.
window.location only provides the String but $location provides various getter and setter funcitons.
Using window.location will need to notify AngularJS for changes.
When to use $location or $route ?
When there is a change in View based on URl we use $route.
If the current View gets updated based upon the URL changes we use $location.

$apply :-
This is responsible for making sure that all the bindings are updated and views have reflected all those changes.
But AngularJS does this work if enough work is to be done. In other cases it just nods and note down all the changes for later. Therefore you have to explicitly call $aplly. Other possible cases of events occuring from outside like jQuery.

We need not call $apply all the time because internally handles itself. Infact it gives exception when digest loop is already executing.
We need to call it when the control is outside of AngularJS.
If possible we should include our code inside a callback of $apply.
Consider using safeApply. Should be included in $rootScope.

Other functions on $location :-

$location can be configured using $locationProvider.
html5Mode :- Boolean value indicating whether it works on HTML5Node or not.
hashPrefix:-

Angular JS takes care of link redirection but special cases could not be written because in such cases page will be reloaded.
Link containing 'target' element.
In case of absolute URL.
Link starting with different base-path.

Module:-
Loading or BootStrapping process involves two phases. There are two main functions handling the same.
Config => It registers all the providers in the phase.Only providers and constants can be injected but Services not.
Constant => Constant values to be available app-wide.
Run => Kickstart your application. Start executing after injector is finished creating.
Some other functions in Module :-
Controller, Directive, Filter, Service, Factory, Value and Provider.
