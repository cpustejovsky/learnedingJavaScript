// //condensing an array of values into a single value

var numbers = [10, 20, 30];
var sum = 0;
var sumOfNumbers = numbers.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    0
);
console.log(sumOfNumbers);

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

//Balanced Parentheses Problem
/*
()()()()() === balanced
((((())))) === balanced
))))) === unbalanced
((((( === unbalanced
)( === unbalanced
)()( === unbalanced
*/

var balancedParens = string => {
    //split the string into an array of characters then reduce
    return !string.split("").reduce((previous, char) => {
        // have a counter of 0 and add 1 for "(" and subtract 1 ")" and make sure counter remains 0
        if (previous < 0) {
            return previous;
        }
        if (char === "(") {
            return ++previous;
        }
        if (char === ")") {
            return --previous;
        }
        return previous;
    }, 0);
};
console.log(balancedParens("(((("));
console.log(balancedParens("(())"));
console.log(balancedParens(")("));

// var trips = [{ distance: 34 }, { distance: 12 } , { distance: 1 }];
// var totalDistance = trips.reduce(((accumulator, currentValue) => currentValue.distance + accumulator), 0);
// console.log(totalDistance);

var desks = [
    { type: "sitting" },
    { type: "standing" },
    { type: "sitting" },
    { type: "sitting" },
    { type: "standing" }
];

var deskTypes = desks.reduce(
    (accumulator, desk) => {
        if (desk.type === "sitting") {
            ++accumulator.sitting;
        }
        if (desk.type === "standing") {
            ++accumulator.standing;
        }
        return accumulator;
    },
    { sitting: 0, standing: 0 }
);

console.log(deskTypes);

/*
Another really hard one!  Write a function called 'unique' that will remove all the duplicate values from an array.
For example, given the following array:
`var numbers = [1, 1, 2, 3, 4, 4];`
Your function should return
`[1,2,3,4]`
Hint: Use the 'reduce' and 'find' helpers.
*/
var testObject = { test: 123 };
var numbers = [
    8,
    ,
    "theotokos",
    true,
    0,
    1,
    1,
    testObject.test,
    2,
    3,
    4,
    4,
    1,
    5,
    2,
    3,
    6,
    0,
    1,
    "theotokos",
    true,
    testObject.test
];

function unique(array) {
    /* First, make sure the function returns a reduced array*/
    return array.reduce((accumulator, currentValue) => {
        /* 
        local variable determines if element exists by finding an element in 
        the array and comparing it to any elements that have already been
        added to the array named `accumulator`

        the find method only returns something if it already exists in the array
        as a result, the only things that need to be pushed into the accumulator
        array are things that return undefined.

        Regardless of what is first hit in the array, it'll be added because
        there isn't anthing to compare it to so it will return an undefined

        From then on, it will only return undefined for things it hasn't seen before.
        Any other `8`s in the numbers array will be ignored.
        */
        let elementExists = accumulator.find(searchingElement => {
            return searchingElement === currentValue;
        });
        console.log(elementExists);
        if (elementExists === undefined) {
            accumulator.push(currentValue);
        }

        return accumulator;
    }, []);
}
console.log(unique(numbers));

console.log({ a: "b" } === { a: "b" });
