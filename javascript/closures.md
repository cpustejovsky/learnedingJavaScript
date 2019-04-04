# Closures

* Note: This will definitely be revisited with more information, especially drawn from Kyle Simpsons *Scope & Closures*

* Say we have a function that returns a function;
```javascript
function greet(greeting) {
    return function(name) {
        return `${greeting}, ${name}`;
    }
};

let sayHowdy = greet('Howdy');

console.log(sayHowdy('cpustejovsky')); //Howdy, cpustejovsky
```
* The execution context for `greet()` is created first which contains the `'Howdy'` we passed in as the `greting` parameter.
* When that execution context is popped off the call stack, these variables would be clared from memory with garbage collection, but until then, it is just sitting in memory.
* so the execution context for `sayHowdy()`  still has a reference to the variables and the memory space of its outer environment, i.e, the **memory** of the execution context of `greet()
* At least when using `var` instead of `let`, you can see closures in action with this little example
```javascript
function buildFunctions() {

    var arr = [];

    for (let i = 0; i < 3; i++) {
        
        arr.push(
            function(){
                console.log(i);
            }
        )
        
    }

    return arr;
};


var fs = buildFunctions();

fs[0]();//3
fs[1]();//3
fs[2]();//3
```

* Since `let` scoped to the block of code, you'll get the expected 0, 1, 2
```javascript
function buildFunctions() {

    var arr = [];

    for (var i = 0; i < 3; i++) {
        
        arr.push(
            function(){
                console.log(i);
            }
        )
        
    }

    return arr;
};


var fs = buildFunctions();

fs[0]();//0
fs[1]();//1
fs[2]();//2
```

## Function Factories!

**Function Factories** are functions returning other functions that will contain the same code buy will have different execution contexts depending on the parameter passed to and different memories spaces because closures!

It's a cool feature of JavaScript that allows code to be a bit DRYer

## Closures and Callbacks

**Callback Functions** are functions you give to another function to be run when the other function is finished. The function you call, calls back by calling the function you gave it when it finishes.

## `call()`, `apply()`, and `bind()`

* Those three methods can control what `this` is in a function execution context.
* All functions  have access to these three methods
* Differences
* bind creates a copy of the function with a different reference object
* call works like the `()` at the end of a function
* apply works like call but needs an array of parameters
  * it is useful in mathematical applications

### Practical Applications
* function borrowing
  * apply an object to a function when that object didn't  have that method.
* function curring
```javascript
function multiply(a, b){return a*b;}
let multiplyByTwo = multiply.bind(this, 2);
console.log(multiplyByTwo(3));//6
```

## YDKJS: Scope & Closures

### Modules

A function has to be invoked for there to be a module instance created. Without the execution of the outer function, the creation of the inner scope and the closures would not occur.


To state it more simply, there are two "requirements" for the module pattern to be exercised:
1. There must be an outer enclosing function, and it must be invoked at least once (each time creates a new module instance).
2. The enclosing function must return back at least one inner function, so that this inner function has closure over the private scope, and can access and/or modify that private state.

#### Modern Modules

```javascript
/*
MyModules assigned it IIFE named Manager
Declares empty object modules
runs function define that takes three parameters
    name
    deps (dependencies as an array)
    impl (implementation)
define adds any dependencies to the module object using a for loop
then it assigned to module[name] the function with an apply method that adds on any dependencies as parameters
`modules[name] = impl.apply(impl, deps);` 
    invokes the definition wrapper function for a module(passing in any dependencies), and storing the return value, the module 's API, into an internal list of modules tracked by name.
get returns module[name] based on what name is passed in as an argument
MyModules returns an object with define and get as methods
*/

var MyModules = (function Manager() {
    var modules = {};

    function define(name, deps, impl) {
        for (var i = 0; i < deps.length; i++) {
            deps[i] = modules[deps[i]];
        }
        modules[name] = impl.apply(impl, deps);
    }

    function get(name) {
        return modules[name];
    }

    return {
        define: define,
        get: get
    };
})();

MyModules.define("bar", [], function () {
    function hello(who) {
        return "Let me introduce: " + who;
    }

    return {
        hello: hello
    };
});

MyModules.define("foo", ["bar"], function (bar) {
    var hungry = "hippo";

    function awesome() {
        console.log(bar.hello(hungry).toUpperCase());
    }

    return {
        awesome: awesome
    };
});

var bar = MyModules.get("bar");
var foo = MyModules.get("foo");

console.log(bar.hello("hippo")); // Let me introduce: hippo

foo.awesome(); // LET ME INTRODUCE: HIPPO
```