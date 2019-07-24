// let users = [
//     { name: 'Jill', id: 1 },
//     { name: 'Alex', id: 2 },
//     { name: 'Bill', id: 3 },
//     { name: 'Alex', id: 4 },
// ];
//
// let alex = users.find((user) => user.name === 'Alex');
//
// console.log(users);
// console.log(alex);
//
// let allAlex = users.((user) => user.name === 'Alex');
// console.log(allAlex);

const ladders = [
    { id: 1, height: 20 },
    { id: 3, height: 25 }
];

function findWhere(array, criteria) {
    // let testObject = criteria;
    // return testObject.height;
    let property = Object.keys(criteria)[0];
    return array.find((item) => item[property] === criteria[property]);
}

let specificLadder = findWhere(ladders, { height: 25 });

console.log(specificLadder);
