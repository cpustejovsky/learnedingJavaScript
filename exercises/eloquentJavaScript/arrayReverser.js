function arrayReverser (array) {
    var count = array.length;
    var reversedArray = [];
    for (let i = 0; i < count; i++) {
        reversedArray.push(array.pop())
    }
    return reversedArray;
}

let testArray = [1,2,3,4,5];

console.log(arrayReverser(testArray));

function reverseArrayInPlace(array) {
    var count = array.length;
    for (let i = 0; i < count; i++) {
        array.push(array.shift())
    }
    return array;
}
let testArrayA = [1, 2, 3, 4, 5];
console.log(testArrayA);
reverseArrayInPlace(testArrayA);
console.log(testArrayA);