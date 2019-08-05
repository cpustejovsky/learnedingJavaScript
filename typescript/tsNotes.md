# TypeScript Notes

## TS Type System
* Helps us catch errors during development instead of during production
* Uses type annotations to analyze our code
  * Dev responsibility to add these in.
* Only active during development (transpiles into JavaScript)
* Doesnt provide any performance optimization unlike other languages
* 
## S.Grider TS Course Overview
* 1) Syntax and Features of TS
  * What is an interface?
  * What is the syntax for defining an interface?
* 2) Design pattersn
  * How do we use intefraces to write reusable code?

## Type
* A type is an easy way to refer to the different props and funcs that a value has.
  * primitive types
    * string
    * number
    * boolean
    * void
    * undefined
    * null
    * symbol
  * object types
    * object
    * array
    * class (EWWW)
    * function
    * built-in objects like Date, etc.
  * a value with all the properties and methods a _____ has
    * .concat for string, etc.

## Type Annotation and Type Inference
* **Annotations**: code we add to tel TS what type of val a var will refer to
  * Devs tells TS the type
  * When to use:
    * When we declare a variable on one line then initialize it later.
    * When we want a variable to have a type that can't be inferred.
    * When a function returns the 'any' type and we need to clarify the value.
* **Inference:** TS tries to figure out what type of val a var refers to
  * TS guesses the type
### Annotations
```typescript
let color: string = "rebeccapurple";
let myNum: number = 42;
let truth: boolean = true;
//arrays
let colors: string[] = ["red", "green", "blue"];
let myNums: number[] = [1, 2, 3];
let truths: boolean[] = [true, false, true];
//classes
class Car {
  
}
let car: Car = new Car();
//object literal
let cartesianPoint: {x: number; y: number, z: number} = {
  a: 10, //will also produce an err; should be "x" instead of "a"
  y: 20,
  z: "it's pronounced zed!" //this produces an err; should be a number not a string
//functions
const logNumber: (num: number) => void = num => {
  console.log(num);
};
const color = "red"; //TS infers the value on a single line; multiple lines have ": any"

//When to use type annotation
//1)Functions that return the any type
const json = '{"x": 10, "y": 20}';
const coordinates: { x: number; y: number } = JSON.parse(json);
console.log(coordinates);
//JSON.parse() is one of many that returns type "any"
//2)When we declare a variable on one line and initialize it later
let nums = [1, 2, 3, 4, 5];
let foundNum: boolean;
for (let i = 0; i < nums.length; i++) {
  if (nums[i] === 3) {
    foundNum = true;
  }
}
//3)When inference doesn't work
//wanted numAboveZero to default as false then change to a num above 0;
let nums = [-10,-1,12];
let numAboveZero: boolean | number = false;

for (let i = 0; i < nums.length; i++) {
  if (nums[i] > 0) numAboveZero = nums[i];
}
```