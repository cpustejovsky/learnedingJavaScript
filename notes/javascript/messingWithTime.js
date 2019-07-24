// new Date("dateString") is browser-dependent and discouraged, so we'll write
// a simple parse function for U.S. date format (which does no error checking)
function parseDate(str) {
  var mdy = str.split("/");
  return new Date(mdy[2], mdy[0] - 1, mdy[1]);
}

function datediff(first, second) {
  // Take the difference between the dates and divide by milliseconds per day.
  // Round to nearest whole number to deal with DST.
  return Math.round((second - first) / (1000 * 60 * 60 * 24));
}
let today = "6/24/2019";
let nextMonth = "7/25/2019";
console.log(datediff(parseDate(today), parseDate(nextMonth)));

let date = new Date();
const daystoSeconds = days => days * 86400000;
let newDate = new Date(date.setTime(date.getTime() + daystoSeconds(30)));

console.log(date);
console.log(newDate);
