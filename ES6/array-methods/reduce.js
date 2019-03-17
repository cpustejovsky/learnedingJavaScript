// //condensing an array of values into a single value

// var numbers = [ 10, 20, 30];
// var sum = 0;
// var sumOfNumbers = numbers.reduce(((accumulator, currentValue) => accumulator + currentValue), 0);
// console.log(sumOfNumbers);

// var primaryColors = [
//     { color: 'red'},
//     { color: 'yellow'},
//     { color: 'blue'}
// ];
// var colorReducer = function(previous, primaryColor){
//     previous.push(primaryColor.color)
//     /*
//     Needs this return function or I get `TypeError: Cannot read property 'push' of undefined`
//     TODO: clean this up to use fat arrow function
//     */
//     return previous;
// };
// togetherPrimaryColors = primaryColors.reduce(colorReducer, []);
// console.log(togetherPrimaryColors);

// //Balanced Parentheses Problem
// /*
// ()()()()() === balanced
// ((((())))) === balanced
// ))))) === unbalanced
// ((((( === unbalanced
// )( === unbalanced
// )()( === unbalanced
// */

// var balancedParens = (string) => {
//     //split the string into an array of characters then reduce
//     return !string.split("").reduce((previous, char) => {
//     // have a counter of 0 and add 1 for "(" and subtract 1 ")" and make sure counter remains 0
//     if (previous < 0) {
//         return previous;
//     }
//     if (char === "(") {
//         return ++previous;
//     } if (char === ")") {
//         return --previous;
//     }
//     return previous;
//     }, 0);
// }
// console.log(balancedParens("(((("));
// console.log(balancedParens("(())"));
// console.log(balancedParens(")("));

// var trips = [{ distance: 34 }, { distance: 12 } , { distance: 1 }];
// var totalDistance = trips.reduce(((accumulator, currentValue) => currentValue.distance + accumulator), 0);
// console.log(totalDistance);

var desks = [
    { type: 'sitting' },
    { type: 'standing' },
    { type: 'sitting' },
    { type: 'sitting' },
    { type: 'standing' }
  ];
  
var deskTypes = desks.reduce((accumulator, desk) => {;
    if (desk.type === 'sitting') {
        ++accumulator.sitting;
    }
    if (desk.type === 'standing') {
        ++accumulator.standing;
    }
    return accumulator;
}, { sitting: 0, standing: 0 });

console.log(deskTypes);