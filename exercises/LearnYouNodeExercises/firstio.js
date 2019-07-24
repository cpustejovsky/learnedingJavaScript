const path = process.argv[2];
const fs = require("fs");
let asyncStream = fs.readFileSync(path);

let readableStream = asyncStream.toString();

let count = 0;
for (let index = 0; index < readableStream.length; index++) {
  if (readableStream[index] === "\n") count++;
}
console.log(count);
