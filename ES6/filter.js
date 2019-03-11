// BASIC FILTERING
// let products = [
//     { name: 'cucumber', type: 'vegetable', quantity: 0, price: 1 },
//     { name: 'banana', type: 'fruit', quantity: 10, price: 15 },
//     { name: 'celery', type: 'vegetable', quantity: 30, price: 13 },
//     { name: 'orange', type: 'fruit', quantity: 3, price: 5 },
//     { name: 'lettuce', type: 'vegetable', quantity: 25, price: 1 }
// ];
// console.log(products);
//
// let fruits = products.filter((product) => product.type === 'fruit');
// console.log(fruits);
//
// let vegetables = products.filter((product) => product.type === 'vegetable');
// console.log(vegetables);
// filter for type: vegetable, quantity > 0, and price < 10
//
// let inStockAffordableVeggies = products.filter((product) => product.type === 'vegetable' && product.quantity > 0 && product.price < 10);
// console.log(inStockAffordableVeggies);

// ADV. FILTERING
// For relational data inside a db

//Challenge! Create a reject function!
let numbers = [10, 20, 30];

function reject (array, iteratorFunction) {
    return array.filter(function(num) {
        return !iteratorFunction(num)
    });
}

let lessThanFifteen = reject(numbers, function(number) {
    return number > 15;
});

console.log(lessThanFifteen);


// let concreteLessThanFifteen = numbers.filter(!(function(number) {
//     return number > 15
// }));
//
// console.log(concreteLessThanFifteen);



