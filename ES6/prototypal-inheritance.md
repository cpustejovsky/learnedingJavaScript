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
  * Convention is to use a capital letter for the function constructor
* **WARNING**
  * If you forget to include the `new` operator, the JavaScript engine will:
    * execute the function
    * return undefined
    * leave you without any of those properties or methods
* Anyways, `new` creates an empty object
  * then calls the function 
    * then the function creates a `this` variable but `new` has `this` point to the empty object
      * then returns whatever the function does to `this`

### Function Constructors and `prototype`

* A function is a special type of object that in addition to the properties shared by all objects, has
  * a name property
  * a code property
* And it also has a **prototype** property that starts out its life as an empty object but is only used by the `new` operator
* This is confusing because a function's prototype property is not the prototype of the function.
  * Rather, it is the prototype of any objects created by `new` from the function.
  * It is the origin of those objects prototype chain.
* You can add methods to child objects after they've been made.
* Generally, methods are added to the `.prototype` to save memory (they only need one) while having all the properties on the parent method.

### Built-in Function Constructors

* `Number(...);` returns an object with the primitive value *boxed* inside.
  * Has methods like `.toFixed`, etc. 
```javascript
"Charles".length //7
```
* In the above example, the JavaScript engine boxes "Charles" into `String()`
* `Date()` is another example.
* **WARNING**
  * Beware of objects that boxed up a primitive like the above example because they'll look like primitives but will actually be objects.
  * Good ole `==` will coerce objects and primitives to be equal because it's the Mr. Meeseeks of JavaScript
    * "caaaan do!"

**ADDITIONAL WARNING**
* Don't use `for...in` because arrays are actually a type of object
  * And if a Framework adds a feature to the prototype, it will mess up the `for...in` looping because it'll include the new feature.
* So use standard iterators!

### `Object.create` and PURE! PROTOTYPAL! INHERITANCE!
* "Beee yourself!"
* JavaScript shouldn't pretend to be Java when it isn't
* So here we go!
```javascript
let new_object = Object.create(parent_object);
```
Let's break that down:
* `Object` is the base object
* `parent_object` is the object you want to create from
* This whole line creates an empty object with a prototype that is pointing to `parent_object`
* Now you can override what you want by adding properties and methods to override the prototype
* 