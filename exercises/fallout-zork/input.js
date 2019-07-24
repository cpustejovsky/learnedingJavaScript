//TODO: replace prompt with prompts in order to better accomplish todo below
//TODO: Use promises and await/async to deal with callback hell

const prompts = require("prompts");

(async () => {
  const response = await prompts({
    type: "number",
    name: "value",
    message: "How old are you?",
    validate: value => (value < 18 ? `Nightclub is 18+ only` : true)
  });

  console.log(response); // => { value: 24 }
})();
