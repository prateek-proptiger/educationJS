http://www.toptal.com/javascript/interview-questions
1)
var bar = null;
(typeof bar === ‘object’) -> true
(bar != null && typeof bar === ‘object’) -> false
var bar = {};
(typeof bar === ‘object’) -> true
(bar != null && typeof bar === 'object') -> true
(bar != null && typeof bar === 'object' && !Array.isArray(bar)) -> true
var bar = [];
(typeof bar === ‘object’) -> true
(bar != null && typeof bar === 'object') -> true
(bar != null && typeof bar === 'object' && Array.isArray(bar)) -> true
(bar != null && typeof bar === 'object' && !Array.isArray(bar)) -> false

If toString.call(bar) —> “[object Object]” OR "[object Array]"

2)
var a = b = 3;
 It is:
 b = 3; Hence Global Variable
 var a = b;
 AND Not:
 var b = 3;
 var a = b;

Obviously in case of ‘use strict’ above statement will give Reference Error.

3)
var myObject = {
    foo: "bar",
    func: function() {
        var self = this;
        console.log("outer func:  this.foo = " + this.foo);
        console.log("outer func:  self.foo = " + self.foo);
        (function() {
            console.log("inner func:  this.foo = " + this.foo);
            console.log("inner func:  self.foo = " + self.foo);
        }());
    }
};
myObject.func();

Answer:
“bar”
“bar”
undefined -> 'this' will not refer to myObject but undefined.Prior to Script5 'this' would have referred to window Object.
"bar"
4) Need to understand later.

5)
Makes debugging easier as now it will show errors which were earlier ignored and also improves performance as the extra code which would have used to ignore errors wont’t be required.
Prevents accidental globals.
Prevents this referring to window in case of null and undefined.
Disallows duplicate property and argument names.
Throws error on invalid use of ‘delete’.
Makes eval() safer.

6)
function foo1()
{
  return {
      bar: "hello"
  };
}

function foo2()
{
  return
  {
      bar: "hello"
  };
}
Answer: foo1 returns -> {bar: "hello"} whereas foo2 -> undefined because of ASI.

7)
A value that is "not a number" resulted as one of the operands was not numeric.

typeof NaN === ’number’ -> true
But
NaN == NaN -> false
NaN even when compared to itself logs false.
Therefore we should use Number.isNaN() OR value !== value.

8)
Numbers in JavaScript are all treated with floating point precision and may not always yield the expected results.”
Example:
console.log(0.1 + 0.2);
console.log(0.1 + 0.2 == 0.3);

will yield
0.30000000000000004
false

9)
var isInteger = function(x){return Math.ceil(x)=== x};
var isInteger = function(x){return (x^0) === x};
var isInteger = function(x){return (typeof x === ’number’) && (x%1 === 0);};
Remember we can’t use parseInt because it coerces its first parameter to a string before parsing digits. Therefore, once the number becomes sufficiently large, its string representation will be presented in exponential form.
10)
(function() {
    console.log(1);
    setTimeout(function(){console.log(2)}, 1000);
    setTimeout(function(){console.log(3)}, 0);
    console.log(4);
})();
Order would be 1 -> 4 -> undefined -> 3 -> 2 on console undefined because function returned undefined.
4 is printed before 3 because browser was busy processing the code and 3 was added to event loop. Hence executed after the processing completed by browser.
11) If a string is Palindrome.
return str === str.split(‘’).reverse().join(‘’);
12)  Good Question
Write a sum method which will work properly when invoked using either syntax below.
console.log(sum(2,3));   // Outputs 5
console.log(sum(2)(3));  // Outputs 5
Answer:
function sum(x) {
  if (arguments.length == 2) {
    return arguments[0] + arguments[1];
  } else {
    return function(y) { return x + y; };
  }
}
13) Later
14) Good Question
var arr1 = "john".split('');
var arr2 = arr1.reverse();
var arr3 = "jones".split('');
arr2.push(arr3);
console.log("array 1: length=" + arr1.length + " last=" + arr1.slice(-1));
console.log("array 2: length=" + arr2.length + " last=" + arr2.slice(-1));
Answer:
"array 1: length=5 last=j,o,n,e,s"
"array 2: length=5 last=j,o,n,e,s"
Step 1 : arr1 = ["j", "o", "h", "n”]
Step 2 : arr2 = ["n", "h", "o", "j”], arr1 = ["n", "h", "o", "j"]
Because reverse works on same array. It doesn’t create a new one therefore arr1 and arr2 points to same array.
Step 3 : arr3 = ["j", "o", "n", "e", "s”]
Step 4 : arr1 = ["n", "h", "o", "j", ["j", "o" ,"n" ,"e", "s"]]
	 arr2 = ["n", "h", "o", "j", ["j", "o" ,"n" ,"e", "s"]]
	 arr3 = ["j", "o", "n", "e", "s”]
Also there is a difference between push() (thats why last element is an array itself) and concat().
15)
console.log(1 +  "2" + "2");
console.log(1 +  +"2" + "2");
console.log(1 +  -"1" + "2");
console.log(+"1" +  "1" + "2");
console.log( "A" - "B" + "2");
console.log( "A" - "B" + 2);
Output:
"122"
“32” Second + treated as unary operator.
"02"
"112"
"NaN2"
NaN
16)
The following recursive code will cause a stack overflow if the array list is too large. How can you fix this and still retain the recursive pattern?

var list = readHugeList();

var nextListItem = function() {
    var item = list.pop();

    if (item) {
        // process the list item...
        nextListItem();
    }
};
Answer:
By modifying the code as followed:
var list = readHugeList();

var nextListItem = function() {
    var item = list.pop();

    if (item) {
        // process the list item...
        setTimeout(nextListItem(), 0);
    }
};
17) Later.
18) Later.
19)
console.log("0 || 1 = "+(0 || 1));
console.log("1 || 2 = "+(1 || 2));
console.log("0 && 1 = "+(0 && 1));
console.log("1 && 2 = "+(1 && 2));
Answer: 1, 1, 0, 2
20)
console.log(false == '0')
console.log(false === '0')
Answer: true, false -> equality and strict equality operator.
21)
var a={},
    b={key:'b'},
    c={key:'c'};

a[b]=123;
a[c]=456;

console.log(a[b]);
Answer: 456
When setting an object property, JavaScript will implicitly stringify the parameter value.
Here both b and c will be converted to "[object Object]" -> a = {“[object Object]”: 456}
22)
10! because code is simply for finding factorial using recursion.
23)
(function(x) {
    return (function(y) {
        console.log(x);
    })(2)
})(1);
Answer: 1 because a closure is implemented.
24)
var hero = {
    _name: 'John Doe',
    getSecretIdentity: function (){
        return this._name;
    }
};

var stoleSecretIdentity = hero.getSecretIdentity;

console.log(stoleSecretIdentity());
console.log(hero.getSecretIdentity());
Answer: undefined, ‘John Doe’.
Second function is called in global(window) context where there is no property named _name.
It can be fixed as var stoleSecretIdentity = hero.getSecretIdentity.bind(hero);
25) Later.
Extra questions on Total:
1) Is there any practical difference between the two function expressions ?
var foo = function(){}; AND function foo(){};
Answer: Yes.
When a function statement (e.g., function foo(){}) is used, the function foo may be referenced before it has been defined, through a technique known as “hoisting”. And the last definition of the function is the one that will be employed, regardless of when it is referenced.
In contrast, when a function expression (e.g., var foo = function(){}) is used, the function foo may not be referenced before it is defined, just like any other assignment statement. Because of this, the most recent definition of the function is the one that will be employed.
Examples ->
i  -> alert(foo()); function foo(){return “1”}; -> 1
ii -> function foo(){return “1”}; alert(foo()); function foo(){return “2”}; -> 2
iii-> alert(foo()); function foo(){return “1”}; function foo(){return “2”}; -> 2
iv -> alert(foo()); var foo = function(){return “1”}; -> Reference Error.
v  -> var foo = function(){return “1”}; alert(foo()); var foo = function(){return “2”}; -> 1
vi -> var foo = function(){return “1”}; var foo = function(){return “2”};  alert(foo());
      var foo = function(){return “3”}; -> 2





http://www.sitepoint.com/5-typical-javascript-interview-exercises/

1)
(function() {
   var a = b = 5;
})();

console.log(b);
Answer: 5 Because ‘a’ is declared with var statement and not ‘b’. ‘b’ is in the global scope.

2)
3)

function test() {
   console.log(a);
   console.log(foo());

   var a = 1;
   function foo() {
      return 2;
   }
}

test();
Answer: undefined and 2.
This is because of Hoisting. A variable declared later in a scope is hoisted on the top but is undefined. Whereas a function defined with function(){} can be referenced before definition because but remember its last definition would be used.

4)
var fullname = 'John Doe';
var obj = {
   fullname: 'Colin Ihrig',
   prop: {
      fullname: 'Aurelio De Rosa',
      getFullname: function() {
         return this.fullname;
      }
   }
};

console.log(obj.prop.getFullname());

var test = obj.prop.getFullname;

console.log(test());
Answer: ‘Aurelia De Rosa’ and ‘John Doe’ because first time function is called and this is obj.prop whereas second time test refers to a function but it would be called in global context thus this is window and Hence ‘John Doe’.

5)

Fix the previous question’s issue so that the last console.log()prints Aurelio De Rosa.

Answer:
console.log(test.call(obj.prop));
