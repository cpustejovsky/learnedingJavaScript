# Prototypal Inheritance

**ADD IN THE NOTES FROM `oop.md`**

* Everything in JavaScript is an object or a primitive.
* Everything eventually leads to the base object.

## Reflection and Extend

* Reflection: An object can look at itslef, listing and changing its properties and methods.
* **TODO: Learn more about extends**

## Function Constructors, 'new', and the History of JavaScript

* JavaScript named thusly to attract Java developers.
* Therefore you have code like:
```javascript
let john = new Person();
```
* This doesn't create a class since JavaScript doesn't really have classes
* `new` is actually an operator of Left-to-Right precedence
* It lets you construct an object via a function.. hence **function constructor**
* Anyways, `new` creates an empty object
  * then calls the function 
    * then the function creates a `this` variable but `new` has `this` point to the empty object
      * then returns whatever the function does to `this`
* 
