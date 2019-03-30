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