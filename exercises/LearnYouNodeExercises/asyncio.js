// const fs = require("fs");
// let asyncStream = fs.readFileSync(path);

// let readableStream = asyncStream.toString();

// let count = 0;
// for (let index = 0; index < readableStream.length; index++) {
//   if (readableStream[index] === "\n") count++;
// }
// console.log(count);

const fs = require("fs");
const path = process.argv[2];
// const path = "./test.txt";

// fs.readFile(path, (err, data) => {
//   if (err) throw err;
//   else {
//     let count = 0;
//     parsedData = data.toString();
//     for (let index = 0; index < parsedData.length; index++) {
//       if (parsedData[index] === "\n") count++;
//     }
//     console.log(count);
//   }
// });
let count = 0;
fs.readFile(path, (err, data) => {
  return new Promise((resolve, reject) => {
    if (err) reject(err);
    else {
      resolve(data.toString());
    }
  });
}).then(results => {
  console.log(results);
});
