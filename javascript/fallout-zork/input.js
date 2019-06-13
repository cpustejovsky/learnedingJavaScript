const prompt = require("prompt");

prompt.start();

prompt.get(["name", "age"], (err, result) => {
    console.log("Input received!");
    console.log(`So your name is ${result.name}`);
    console.log(`Also, you are ${result.age} years old`);
});
