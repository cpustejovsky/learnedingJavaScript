const http = require("http");
const map = require("through2-map");

const port = process.argv[2] || 8000;
http
  .createServer((req, res) => {
    if (req.method !== "POST") return res.end("send me a POST request\n");
    req
      .pipe(
        map(function(chunk) {
          return chunk.toString().toUpperCase();
        })
      )
      .pipe(res);
  })
  .listen(port, () => console.log(`running on ${port}`));
