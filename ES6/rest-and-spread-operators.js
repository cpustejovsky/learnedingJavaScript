const addNumbers = (numbers) => {
    return numbers.reduce((sum, number) => {
        return sum + number;
    }, 0);
}

console.log(addNumbers([1,2,3,4,5])); //15

//very good, but how do you sum a bunch of numbers that aren't in an array?

const addParamNumbers = (...numbers) => {
    return numbers.reduce((sum, number) => {
        return sum + number;
    }, 0);
}

console.log(addParamNumbers(1,2,3,4,5,6,7,8,9,10)); //55


//Additional example

const defaultColors = ['red', 'green'];
const userFavoriteColors = ['orange', 'yellow'];
const fallColors = ['fire red', 'fall orange'];

let oldWay = ['blue'].concat(defaultColors).concat(userFavoriteColors).concat(fallColors);

let newWay = ['blue', ...defaultColors, ...userFavoriteColors, ...fallColors];

console.log(oldWay);
console.log(newWay);
//TODO: need to read up on .indexOf
const validateShoppingList = (...items) => {
    if (items.indexOf('orange milk') < 0) {
        return ['orange milk', ...items];
    }

    return items;
}

let Mar2019list = validateShoppingList(
    'oranges',
    'bread',
    'eggs',
    'sausage',
    'brown rice'
);

console.log(Mar2019list);

const Libary = {
    legacyMultiply(...rest) {
        console.log('Please use the updated method isntead');
        return this.updatedMultiply(...rest);
    },
    updatedMultiply(a, b) {
        return a * b;
    }
};

let exampleTest = Libary.legacyMultiply(3,4);
console.log(exampleTest);
