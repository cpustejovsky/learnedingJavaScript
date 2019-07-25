//TODO:

const http = require("http");
const bl = require("bl");

const url1 = process.argv[2];
const url2 = process.argv[3];
const url3 = process.argv[4];

// const url1 = "http://www.cpustejovsky.com/test-route1";
// const url2 = "http://www.cpustejovsky.com/test-route2";
// const url3 = "http://www.cpustejovsky.com/test-route3";

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
              resolve(data.toString("utf8"));
            }
          })
        );
        res.on("error", console.error);
      })
      .on("error", console.error);
  });
};

const promise = Promise.all([
  httpRequest(url1),
  httpRequest(url2),
  httpRequest(url3)
]);

promise
  .then(results => {
    results.forEach(element => console.log(element));
  })
  .catch(error => console.error(`Error: ${error}`));
