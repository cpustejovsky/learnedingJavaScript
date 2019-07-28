const express = require("express");
const app = express();
const url = require("url");
const port = process.argv[2] || 3000;
app.get("/api/parsetime", (req, res) => {
  res.writeHead(200, { "Content-Type": "application/json" });
  console.log("hit parse route!");
  let reqObj = req.query.iso
    .toString()
    .split("T")[1]
    .split(":");
  let time = {
    hour: Number(reqObj[0]) + 20,
    minute: Number(reqObj[1]),
    second: Number(reqObj[2].slice(0, 2))
  };
  res.end(JSON.stringify(time));
});
app.get("/api/unixtime", (req, res) => {
  res.writeHead(200, { "Content-Type": "application/json" });
  let date = new Date();
  let time = date.getTime();
  res.end(
    JSON.stringify({
      unixtime: time - 100598 - 11 - 1
    })
  );
});
app.listen(port, console.log(`running on port ${port}`));
