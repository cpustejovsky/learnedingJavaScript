//TODO: Make this work with JSON

const clog = val => console.log(val);

const removeDups = arr => {
    let uniqueValues = [];
    for (let i = 0; i < arr.length; i++) {
        if (uniqueValues.includes(arr[i])) {
            continue;
        } else {
            uniqueValues.push(arr[i]);
        }
    }
    return uniqueValues;
};

let test1 = removeDups(["John", "Taylor", "John"]); // ["John", "Taylor"]
let test2 = removeDups([1, 0, 1, 0]); // [1, 0]
let test3 = removeDups(["The", "big", "cat"]); // ["The", "big", "cat"]

clog(test1);
clog(test2);
clog(test3);
