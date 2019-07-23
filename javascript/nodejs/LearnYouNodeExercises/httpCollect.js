const http = require("http");
const bl = require("bl");
const url = process.argv[2];

http.get(url, res => {
    res.setEncoding("utf8");
    res.pipe(
        bl((err, data) => {
            if (err) {
                console.error(err);
            } else {
                console.log(data.toString().length);
                console.log(data.toString());
            }
        })
    );
    res.on("error", console.error);
}).on("error", console.error);
