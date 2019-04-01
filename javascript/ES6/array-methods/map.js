// SIMPLE EXAMPLE
// let numbers = [1,2,3];
// let doubled = numbers.map((number) => number * 2);
// let tripled = numbers.map((number) => number * 3);
// let quadrupled = numbers.map((number) => number * 4);
// let quintupled = numbers.map((number) => number * 5);
//
// console.log(numbers);
// console.log(doubled);
// console.log(tripled);
// console.log(quadrupled);
// console.log(quintupled);


// MORE COMPLEX PLUCKING EXAMPLE

let cars = [
    { model: 'Buick', price: '1000' },
    { model: 'Camaro', price: '3000' }
];

let prices = cars.map((car) => car.price);

console.log(cars);
console.log(prices);


