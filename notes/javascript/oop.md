#OOP in JavaScript is OP!

## `Object.create` and PURE! PROTOTYPAL! INHERITANCE!
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

To test this out and make sure I understand, I'll take that DEMO only code from [my notes on prototypes](function-constructors.md) and reconfigure it to not mess with the `.__proto__` property

```javascript
//make an object
let Person = {
    firstName: 'Default',
    middleName: 'Default',
    lastName: 'Default',
    getFullName: function() {
        return `${this.firstName} ${this.middleName} ${this.lastName}`;
    }
};
// create an object from the Person prototype
let cpustejovsky = Object.create(Person);
// override/hide props and methods
cpustejovsky.firstName = 'Charles';
cpustejovsky.lastName = 'Pustejovsky';

console.log(cpustejovsky.getFullName()); //Charles Default Pustejovsky

let jane = Object.create(Person);
jane.firstName = 'Jane';

console.log(jane.getFullName()); // Jane Default Default
```