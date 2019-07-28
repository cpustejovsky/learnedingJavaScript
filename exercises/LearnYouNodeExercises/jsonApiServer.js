const http = require("http");
const url = require("url");
const port = process.argv[2] || 3000;

const parseTime = time => {
  return {
    hour: time.getHours(),
    minute: time.getMinutes(),
    second: time.getSeconds()
  };
};

const unixTime = time => {
  return { unixtime: time.getTime() };
};

const server = http.createServer((req, res) => {
  let parsedUrl = url.parse(req.url, true);
  let time = new Date(parsedUrl.query.iso);
  let result;
  //TODO: learn regex
  if (/^\/api\/parsetime/.test(req.url)) {
    result = parseTime(time);
  } else if (/^\/api\/unixtime/.test(req.url)) {
    result = unixTime(time);
  }

  if (result) {
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify(result));
  } else {
    res.writeHead(404);
    res.end();
  }
});
server.listen(port);
