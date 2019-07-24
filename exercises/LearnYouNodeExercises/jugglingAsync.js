const http = require("http");
const bl = require("bl");
const url1 = process.argv[2];
const url2 = process.argv[3];
const url3 = process.argv[4];

http
  .get(url1, res => {
    res.setEncoding("utf8");
    res.pipe(
      bl((err, data) => {
        if (err) {
          console.error(err);
        } else {
          console.log(data.toString());
        }
      })
    );
    res.on("error", console.error);
  })
  .on("error", console.error);
http
  .get(url2, res => {
    res.setEncoding("utf8");
    res.pipe(
      bl((err, data) => {
        if (err) {
          console.error(err);
        } else {
          console.log(data.toString());
        }
      })
    );
    res.on("error", console.error);
  })
  .on("error", console.error);
http
  .get(url3, res => {
    res.setEncoding("utf8");
    res.pipe(
      bl((err, data) => {
        if (err) {
          console.error(err);
        } else {
          console.log(data.toString());
        }
      })
    );
    res.on("error", console.error);
  })
  .on("error", console.error);
