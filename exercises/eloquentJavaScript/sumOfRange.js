function range (start, stop, step = 1) {
    let arr = [];
    for (let i = start; i <= stop; i+=step) {
        arr.push(i);
    }
    return arr;
}

function sum (arr) {
    let sumNum = 0;
    arr.forEach(element => {
        sumNum += element;
    });
    return sumNum;
}

console.log(range(1,5));
console.log(sum(range(1,5)));
console.log(range(1, 10));
console.log(sum(range(1,10)));
console.log(range(0, 10, 2));
console.log(sum(range(0, 10, 2)));
