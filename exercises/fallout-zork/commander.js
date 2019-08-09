const commander = require("commander");
const program = new commander.Command();
program.version("0.0.1");

program.option("-c, --cheese [type]", "Add cheese with optional type");

program.parse(process.argv);

if (program.cheese === undefined) {
  console.log("no cheese");
} else if (program.cheese === true) {
  console.log("add cheese");
} else console.log(`add cheese type ${program.cheese}`);
