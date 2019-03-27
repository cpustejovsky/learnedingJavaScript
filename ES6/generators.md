# Generators

## What is a generator?
* Plain definition
  * Generator is a function that can be entered and exited multiple times.
  * Unlike a function that is run and done (tehehe)
* Code Example
```javascript
function* numbers() {
    yield;
}

const gen = numbers();
console.log(gen.next()); //{ value: undefined, done: false }
console.log(gen.next()); //{ value: undefined, done: true }

function *numbersNoYield() {}; /* alternative syntax */
const genAlt = numbersNoYield();
console.log(genAlt.next()); // { value: undefined, done: true }
console.log(genAlt.next()); // { value: undefined, done: true }
```
* `yield` is a keyword added with ES6
  * tba
* `.next()` 
### S.Grider's Analogy || Short Story
![sgrider-short-story](images/sgrider-short-story.png)
  * Walk from house to store along the **sidewalk**
  * Go from the sidewalk to the store with money
  * Come from the store to the sidewalk no longer with money, but with groceries
* Code Version of Short Story
```javascript
function* shopping() {
    // stuff on the sidewalk

    // walking down the sidwalk

    // go into the store with cash
    const stuffFromStore = yield 'cash';
    // walking to laundromat
    const cleanClothes = yield 'laundry';

    // walking back home
    return [stuffFromStore, cleanClothes];
};

// stuff in the store
const gen = shopping();
console.log(gen.next()); // leaving our house
// walked into the store
// walking up and down the aisles..
// purchase our stuff
console.log(gen.next('groceries')); // leaving the store with groceries
console.log(gen.next('clean clothes'));

/* 
RESULT
{
    value: 'cash',
    done: false
} {
    value: 'laundry',
    done: false
} {
    value: ['groceries', 'clean clothes'],
    done: true
}
*/
```
* The first `.next` starts the generator
* The `yield` keyword acts as the money arrow in the diagram above allowing transition from inside the function to outside the function.
* The second `.next` takes us back to the generator. In this case it sort of replaces 'cash' with 'groceries'
* **KEY TAKEAWAY**
  * yield stops execution of the generator and exits with a value
  * then more code can take place
  * generator is re-entered to resume generator execution with a passed-in variable.
### More Practical Example with Generators
```javascript
function* colors() {
    yield 'red';
    yield 'blue';
    yield 'green';
};

const gen = colors();
console.log(gen.next());
console.log(gen.next());
console.log(gen.next());
console.log(gen.next());

/*
RESULTS
{
    value: 'red',
    done: false
} {
    value: 'blue',
    done: false
} {
    value: 'green',
    done: false
} {
    value: undefined,
    done: true
}
*/
```
## What does a generator do?
They work beauitfully with `for...of` loops

### Practical Uses
* 



## Iteration with generators

## Generator delegation

## Generators with Symbol.iterator

