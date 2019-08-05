const prompts = require("prompts");
const Character = {
  name: "Farkyl",
  age: 20,
  class: "Cleric"
};

let acceptableClasses = [
  "Bard",
  "Cleric",
  "Druid",
  "Fighter",
  "Ranger",
  "Wizard"
];

const newCharacter = Object.create(Character);

const questions = [
  {
    type: "text",
    name: "charName",
    message: "What is your name? (Any name is acceptable)",
    validate: charName =>
      charName.length > 0 ? true : "Need to put something for your name"
  },
  {
    type: "number",
    name: "age",
    message: "How old are you? (between 10 and 800)",
    validate: age =>
      age >= 10 && age <= 800 ? true : "Age is too high or too low"
  },
  {
    type: "text",
    name: "charClass",
    message: `What class do you want to be?
    Classes are:
    Bard
    Cleric
    Druid
    Fighter
    Ranger
    Wizard
    `,
    validate: function(charClass) {
      for (let i = 0; i < acceptableClasses.length; i++) {
        if (charClass === acceptableClasses[i]) return true;
      }
      return "Must pick a correct class";
    }
  }
];

(async () => {
  const response = await prompts(questions);
  newCharacter.name = response.charName;
  newCharacter.age = response.age;
  newCharacter.class = response.charClass;
  console.log(newCharacter);
  // => response => { username, age, about }
})();
