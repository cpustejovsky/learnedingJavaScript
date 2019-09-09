const characterCreation = require("./characterCreation.js");

console.log("Welcome adventurer! Time to create your character");

async function createYourCharacter() {
  let yourChar = await characterCreation();
  return yourChar;
}
let yourChar;
createYourCharacter()
  .then(val => {
    yourChar = val;
    return yourChar;
  })
  .then(() => {
    console.log(
      `You find yourself in a dungeon. ${
        yourChar.name
      }, which direction do you want to go?`
    );
  });
