function pluck(array, property) {
    let plucked = array.map(function(item) {
        return item[property];
    });

    return plucked;
}

arrayPlucker = function(array, property) {
    return array.map((item) => item[property]);
};

let paints = [
    { color: 'red' },
    { color: 'blue' },
    { color: 'yellow' }
];

colors = pluck(paints, 'color');

colorPlucker = arrayPlucker(paints, 'color');
console.log(colorPlucker);
console.log(arrayPlucker(paints, 'color'));


console.log(pluck(paints, 'color'));
console.log(colors);
