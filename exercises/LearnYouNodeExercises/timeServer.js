const net = require("net");
const port = Number(process.argv[2]);
// const port = 8000;
const server = net.createServer(socket => {
  let date = new Date();
  function now(time) {
    if (time === date.getMonth()) {
      time += 1;
    }
    if (time.toString().length < 2) {
      return `0${time}`;
    }
    return time;
  }
  let newDate = {
    year: now(date.getFullYear()),
    month: now(date.getMonth()),
    day: now(date.getDate()),
    hour: now(date.getHours()),
    minute: now(date.getMinutes())
  };
  let resultDate = `${newDate.year}-${newDate.month}-${newDate.day} ${
    newDate.hour
  }:${newDate.minute}\n`;
  socket.end(resultDate);
});

server.listen(port).on("error", err => {
  throw err;
});
