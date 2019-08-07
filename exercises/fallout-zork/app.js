const characterCreation = require("./characterCreation.js");

console.log("Welcome adventurer! Time to create your character");
let yourChar = {};

(async () => {
  let test = await characterCreation(yourChar);
  yourChar = test;
  return yourChar;
})().then(val => console.log());
