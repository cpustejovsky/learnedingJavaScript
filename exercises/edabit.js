// const isValidIP = ipAddress => {
//   let ipAddyArr = ipAddress.split(".");
//   for (let i = 0; i < ipAddyArr.length; i++) {
//     let elem = ipAddyArr[i];
//     if (elem[0] === "0") return false;
//   }
//   let qualification = /^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/;
//   if (
//     qualification.exec(ipAddress) === null ||
//     qualification.exec(ipAddress) === false
//   ) {
//     return false;
//   } else {
//     return true;
//   }
// };

function isValidIP(str) {
  if (/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/.test(str)) {
    str = str.split(".");
    for (var i in str) {
      if (parseInt(str[i]).toString().length !== str[i].length || str[i] > 255)
        return false;
    }
    return true;
  }

  return false;
}

console.log(isValidIP("1.2.3.4"));
// true
console.log(isValidIP("1.2.3"));
// false
console.log(isValidIP("1.2.3.4.5"));
// false
console.log(isValidIP("123.45.67.89"));
// true
console.log(isValidIP("123.456.78.90"));
// false
console.log(isValidIP("123.045.067.089"));
// false
