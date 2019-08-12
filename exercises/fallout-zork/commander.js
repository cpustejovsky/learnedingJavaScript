const program = require("commander");

program.parse(process.argv);
if (!process.argv[2]) {
  console.log("Hello, there! Left or Right?");
} else if (process.argv[2].toUpperCase() === "LEFT") {
  console.log("You went left!");
} else if (process.argv[2].toUpperCase() === "RIGHT") {
  console.log("You went right!");
} else {
  console.log("I don't know where you went");
}
