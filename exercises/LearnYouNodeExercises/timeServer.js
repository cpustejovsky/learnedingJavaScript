const net = require("net");

// const port = process.argv[2];
const port = process.argv[2];

const server = net.createServer(socket => {
  let date = new Date();
  let newDate = {
    year: date.getFullYear(),
    month: date.getMonth(),
    getActualMonth() {
      this.month += 1;
      if (this.month.toString().length < 2) {
        return `0${this.month}`;
      }
      return this.month;
    },
    day: date.getDate(),
    getActualDay() {
      if (this.day.toString().length < 2) {
        return `0${this.day}`;
      }
      return this.day;
    },
    hour: date.getHours(),
    getActualHour() {
      if (this.hour.toString().length < 2) {
        return `0${this.hour}`;
      }
      return this.hour;
    },
    minute: date.getMinutes(),
    getActualMinute() {
      if (this.minute.toString().length < 2) {
        return `0${this.minute}`;
      }
      return this.minute;
    }
  };
  let resultDate = `${
    newDate.year
  }-${newDate.getActualMonth()}-${newDate.getActualDay()} ${newDate.getActualHour()}:${newDate.getActualMinute()}\n`;
  socket.write(resultDate);
  socket.end();
  return socket;
});
server.on("error", err => {
  throw err;
});
server.listen(port);
