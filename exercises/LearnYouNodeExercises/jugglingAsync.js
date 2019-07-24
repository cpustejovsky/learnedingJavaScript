//TODO:

const http = require("http");
const bl = require("bl");
const url1 = process.argv[2];
const url2 = process.argv[3];
const url3 = process.argv[4];

const httpRequest = url => {
  return new Promise((resolve, reject) => {
    http
      .get(url, res => {
        res.setEncoding("utf8");
        res.pipe(
          bl((err, data) => {
            if (err) {
              reject(err);
            } else {
              resolve(data.toString("ascii"));
            }
          })
        );
        res.on("error", console.error);
      })
      .on("error", console.error);
  });
};

// httpRequest(url1)
//   .then(results => console.log(results))
//   .catch(error => console.error(`Error: ${error}`));
// httpRequest(url2)
//   .then(results => console.log(results))
//   .catch(error => console.error(`Error: ${error}`));
// httpRequest(url3)
//   .then(results => console.log(results))
//   .catch(error => console.error(`Error: ${error}`));

const promise = Promise.all([
  httpRequest(url1),
  httpRequest(url2),
  httpRequest(url3)
]);

promise
  .then(results => console.log(results))
  .catch(error => console.error(`Error: ${error}`));
