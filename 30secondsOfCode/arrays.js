//all: it looks like syntatic sugar for the every function. But seems sweet to me!

const all = (arr, fn = Boolean) => arr.every(fn);

let arr1 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

console.log(all(arr1, x => x < 11)); //true 
console.log(all(arr1, x => x < 9)); //false 

//does the same thing as this below

console.log(arr1.every(x => x < 11)); //true
console.log(arr1.every(x => x < 9)); //fakse