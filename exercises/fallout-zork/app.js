const characterCreation = require("./characterCreation.js");

console.log("Welcome adventurer! Time to create your character");
characterCreation().then(val => {
  console.log(val);
});
