const fs = require("fs");
const http = require("http");
//env vars
const port = process.argv[2];
const file = process.argv[3];

http
  .createServer((req, res) => {
    const readStream = fs.createReadStream(file);
    readStream
      .on("open", () => {
        readStream.pipe(res);
      })
      .on("error", err => res.end(err));
  })
  .listen(port);
