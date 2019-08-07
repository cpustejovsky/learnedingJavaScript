const prompts = require("prompts");

module.exports = async function characterCreation(yourCharacter) {
  let Character = {
    name: "Farkyl",
    age: 20,
    class: "Cleric"
  };

  let newCharacter = Object.create(Character);

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
      type: "select",
      name: "charClass",
      message: "What class do you want to be?",
      choices: [
        {
          title: "Bard",
          description: "Whatever a Bard does.",
          value: "Bard"
        },
        {
          title: "Cleric",
          description: "Whatever a Cleric does.",
          value: "Cleric"
        },
        {
          title: "Druid",
          description: "Whatever a Druid does.",
          value: "Druid"
        },
        {
          title: "Fighter",
          description: "Whatever a Fighter does.",
          value: "Fighter"
        },
        {
          title: "Ranger",
          description: "Whatever a Ranger does.",
          value: "Ranger"
        },
        {
          title: "Wizard",
          description: "Whatever a Wizard does.",
          value: "Wizard"
        }
      ]
    }
  ];

  const response = await prompts(questions);
  newCharacter.name = response.charName;
  newCharacter.age = response.age;
  newCharacter.class = response.charClass;
  console.log(
    `Well met, ${newCharacter.name}! You will need all your skills as a ${
      newCharacter.class
    } to live past age ${newCharacter.age}`
  );
  yourCharacter = newCharacter;
  return yourCharacter;
};
