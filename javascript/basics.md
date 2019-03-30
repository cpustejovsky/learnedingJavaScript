# Syntax Parser
* Program that reads your code, determines what it does, and if it is valid.
  * It goes through, character by character, to determine this.

# Lexical Environment
* Where somethings site physically in the code you write
* This is something the syntax parser cares about
* **variable environmnents**: Where the variables live and how they relate to each other in memory
* It influences the outer environment 
* the engine will look for variables in the outer environment if none were found in the immediate execution context.
  * It will keep looking in outer environments along the scope chain until it reaches the Global object
* **scope chain**: where something sits lexically

# Execution Context
A wrapper to help manage the code that is running
* Every execution context has a reference to an outer environment
* Every execution context also gets a `this` variable created for it
## Base Global Execution Context
* The JavaScript Engine created two things upon starting up
  * `this`
  * a Global object
    * for browsers, this is the `Window` object
    * variables and functions outside of functions go into the global object
      * variables and functions inside of functions are *hidden* inside that function from the Global object

# Phases!
## Creation Phase
* The JavaScript Engine goes through a **creation phase** when it starts
* The creation phase gives us
  * Global object
  * `this`
  * Outer environment
  * Setup memory space for variables and functions
    * The values are not defined at this time so they will return `undefined` as a placeholder
      * This is why you should never set a variable to `undefined` because it is preferable to let that mean the variable was never defined which is more useful for debugging.
## Execution Phase
* Next the engine starts executing code line by line
* This is single-threaded, synchronous execution
  * This means it goes one command at a time in order
* Function runs or is called with `()`
```javascript
function conjunctionJunction (params){
    console.log(`here are your ${params}`);
    console.log('Conjunction junction, what\'s your function?!?!');
}
```
### Execution or Call Stack
```javascript
function b(){ /*does something*/}
function a(){ 
    /*does something*/
    b();
};
a();
```
* Creation phase ends, execution phase begins, and the engine starts stacking
  * first `b()` needs to execute so `a(`) can finish executing
    * then anything in the Global object executes

# Async, Anyone?
* Since JavaScript is **single-threaded and synchronous**, how does it handle asynchronous events?
* Well, in addition to the execution/call stack, we have
## Event Queue
* When the execution stack is empty, the JS engine looks at the event queue
  * it then executes the function for the event and the next thing in the event queue moves up
    * once the execution stack is empty, that next thing will be run


# Types
* JavaScript uses **dynamic typing** which means the engine figures out what type of data a variable is while your code is running (or during just-in-time compilation)
  * dangerous if not properly understood, but powerful
## Six Primitive Types
1. string(`"Hello, World!"`)
2. number(floating point: `3.1415926`)
3. boolean(true || false)
    * `undefined` and `null` and `""` all convert to false when using `Boolean(...);`
    * what is between the parentheses of an if statement will be converted to a boolean value
      * as a result, we can use this to see if a variable has a value
      * 0 will also be converted to false so that needs to be accounted for
    * ES6 default parameters helps remove some of the need to use the above
4. undefined (don't use, remember?)
5. null
6. Symbol

#Operators
* They are actually just special function written in **infix notation**
  * infix notation: (a+b)
  * prefix noation: (+ a b)
  * postfix notation: (a b +)
* Operator precedence determines which operator is called first
* If two operators have the same precedence, operator associativity determines what order an operator is called in
  * Left to Right
  * Right to Left
* [MDN Cheatsheet](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_Precedence)

# Objects and Functions
* Objects and functions are connected in JavaScript unlike they are in most other programming languages
  * In memory, objects store primities and child objects as properties and functions as methods
```javascript
let person = new Object();
person["firstName"] = "Tony";
console.log(person); //{ firstName: 'Tony' }
```
* The above operator is sometimes seen in frameworks because it is more dynamic and easier to change
* the `.` operator has the second highest precedence after `[]`
  * `person.lastName = "Soprano"`
* the shorthand for `let person = new Object();` is `let person = {};` which also allows you to start setting properties
* Objects allow you to avoid namespace collision

##JSON
* JavaScript Object Notation
* inspired by object literal notation
* unlike JavaScript, JSON's keys have to be wrapped in `""`
  * It is a subset of JavaScript
* `JSON.stringify();` turns an object into JSON
* `JSON.parse();` turns JSON into an object

## Function Statements vs. Function Expressions
* A function statement doesn't return a value, it just does work.
```javascript
function greet(){
    console.log('howdy!');
}
```
* A function expression is a unit of code that results in a value which does not have to save to a variable.
```javascript
var anonymousGreet = () => {
    console.log('oh-lo');
}
//invoked by
anonymousGreet();
//this is not hoisted, but set to `undefined` like a variable
```

## By value vs. By reference
* passing
  * Either A=
* primitives pass by value 
  * change A doesn't affect B
* objects pass by reference and don't mutate
  * changing A changes B
![reference-vs-value](images/pass-by-reference-vs-pass-by-value-animation.gif)