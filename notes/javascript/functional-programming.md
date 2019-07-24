# Functional Programming

* JavaScript  is closer to Lisp and Schema than Java or C#
* It's best practice to think and code in terms of functions in order to limit verbosity, minimize work & repetition, and put work into functions.
* For example, we can write a mapping function that takes an array and a function
```javascript
function mapForEach(arr, fn){
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
        newArr.push(
            fn(arr[i])
        )
    };
    return newArr;
};

function double(num){
    return num * 2;
};

let numbers = [1,2,3,4,5,6,7,8,9,10];

let doubledNumbers = mapForEach(numbers, double);
console.log(doubledNumbers);//[2,4,6,8,10,12,14,16,18,20]
```