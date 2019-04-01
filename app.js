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
console.log(doubledNumbers);