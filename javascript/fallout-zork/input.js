//TODO: Use promises and await/async to deal with callback hell

const prompt = require("prompt");

prompt.start(
    console.log(
        "Please provide your name, age, favorite programming language, favorite band, and spouse. (If you are unmarried, type in 'unmarried' into the console)"
    )
);

prompt.get(
    ["name", "age", "programming language", "band", "spouse"],
    (err, result) => {
        console.log("Input received!");
        console.log(`So your name is ${result.name}`);
        console.log(`Also, you are ${result.age} years old`);
        console.log(
            `Also, your favorite programming language is ${
                result["programming language"]
            }`
        );
        console.log(`Also, your favorite band is ${result.band}`);
        if (result.spouse === "unmarried") {
            console.log("You are unmarried");
        } else {
            console.log(
                `You are married to ${result.spouse}. Congratulations!`
            );
        }
    }
);
