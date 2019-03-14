let computers = [
    { name: 'Apple', ram: 24},
    { name: 'Compaq', ram: 4},
    { name: 'Acer', ram: 32}
];

let allCompsHaveAtLeastSixteenGigsOfRam = computers.every((computer) => computer.ram > 16);
let atLeastOneCompHasAtLeastSixteenGigsOfRam = computers.some((computer) => computer.ram > 16);

console.log(allCompsHaveAtLeastSixteenGigsOfRam);
console.log(atLeastOneCompHasAtLeastSixteenGigsOfRam);


var users = [
    { id: 21, hasSubmitted: true },
    { id: 62, hasSubmitted: false },
    { id: 4, hasSubmitted: true }
  ];
//TODO: message Stephen Grider about bug in Coding Exercise 12: `users.every((user) => hasSubmitted);` passes despite syntax error  
var hasSubmitted = users.every((user) => user.hasSubmitted);

console.log(hasSubmitted);

var requests = [
    { url: '/photos', status: 'complete' },
    { url: '/albums', status: 'pending' },
    { url: '/users', status: 'failed' }
  ];
  
var inProgress = requests.some((request) => request.status === 'pending');

console.log(inProgress);