const request = require("request");

let bitpayBlogUrl = "https://blog.bitpay.com";
let bitpayUrl = "https://bitpay.com";
let routes = []; //insert from json file

for (let i = 0; i < routes.length; i++) {
  request(`${bitpayBlogUrl}${routes[i].Page}`, function(error, response, body) {
    if (!error && response.statusCode == 200) {
      // writing the response to a file named data.html
      console.log("blog!");
    } else {
      routes.splice(i, 0);
    }
  });
}

// request("https://bitpay.com/tick-tock", function(error, response, body) {
//   if (!error && response.statusCode == 404) {
//     // writing the response to a file named data.html
//     console.log("success!");
//   } else {
//     console.log("also success?");
//   }
// });
