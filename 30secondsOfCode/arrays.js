//all: it looks like syntatic sugar for the every function. But seems sweet to me!
console.log('this is for the all() function')

const all = (arr, fn = Boolean) => arr.every(fn);

let arr1 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let arr2 = [1, 1, 1, 1, 1];

console.log(all(arr1, x => x < 11)); //true 
console.log(all(arr1, x => x < 9)); //false 

//does the same thing as this below

console.log(arr1.every(x => x < 11)); //true
console.log(arr1.every(x => x < 9)); //false

//allEqual: specialized version of all()
console.log('this is for the all() function')

const allEqual = arr => arr.every(val => val === arr[0]);

console.log(allEqual(arr2)); //true
console.log(allEqual(arr1)); //false

//same as...

console.log(arr2.every(x => x === arr2[0])); //true
console.log(arr1.every(x => x === arr1[0])); //false

//any() function: syntatic sugar for the array method some
console.log('this is for the any() function');

const any = (arr, fn = Boolean) => arr.some(fn);

console.log(any(arr1, (x => x < 1))); //true
console.log(any(arr1, (x => x < 0))); //false

//same as...

console.log(arr1.some(x => x < 1)); //true
console.log(arr1.some(x => x < 0)); //false

console.log('this is for the arrayToCSV() function');

const arrayToCSV = (arr, delimiter = ',') =>
    arr.map(v => v.map(x => `"${x}"`).join(delimiter)).join('\n');

console.log(arrayToCSV([
    ['a', 'b'],
    ['c', 'd']
])); // '"a","b"\n"c","d"'
console.log(arrayToCSV([
    ['a', 'b'],
    ['c', 'd']
], ';')); // '"a";"b"\n"c";"d"'

console.log('this is the bifurcate() function');

const bifurcate = (arr, filter) => arr.reduce((accumulator, currentValue, i) => (accumulator[filter[i] ? 0 : 1].push(currentValue), accumulator), [[], []]);

let bifurcateTest = bifurcate(['beep', 'boop', 'foo', 'bar'], [true, true, false, true]); // [ ['beep', 'boop', 'bar'], ['foo'] ]
console.log(bifurcateTest);

let bifurcateTest2 = bifurcate(['BTC', 'ETH', 'BTC', 'ETH'], [true, false, true, false]); // [ ['BTC', 'BTC'], ['ETH', 'ETH'] ]
console.log(bifurcateTest2);
