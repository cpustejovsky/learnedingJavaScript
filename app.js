const points = [
    [4, 5],
    [10, 1],
    [0, 40],
];

// structure these x and y points as an array of objects with x and y keys

let objectPoints = points.map(([x, y]) => {
    return { x: x, y: y};
});

console.log(objectPoints);