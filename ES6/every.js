let computers = [
    { name: 'Apple', ram: 24},
    { name: 'Compaq', ram: 4},
    { name: 'Acer', ram: 32}
];

let allCompsHaveAtLeastSixteenGigsOfRam = computers.every((computer) => computer.ram > 16);
let atLeastOneCompHasAtLeastSixteenGigsOfRam = computers.some((computer) => computer.ram > 16);

console.log(allCompsHaveAtLeastSixteenGigsOfRam);
console.log(atLeastOneCompHasAtLeastSixteenGigsOfRam);
