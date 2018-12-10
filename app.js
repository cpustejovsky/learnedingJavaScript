//where random bits of testing happen

var promise = new Promise(function(resolve, reject) {
    2 + 2

    if (5) {
        resolve("Stuff worked!");
    }
    else {
        reject(Error("It broke"));
    }
});

promise.then(function(result) {
    console.log(result); // "Stuff worked!"
}, function(err) {
    console.log(err); // Error: "It broke"
});
