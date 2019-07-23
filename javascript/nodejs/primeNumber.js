// example code from dev.to/jorge_rockr/everything-you-need-to-know-about-node-js-lnc

https: function isPrime(n) {
  for (let i = 2, s = Math.sqrt(n); i <= s; i++) {
    if (n % i === 0) return false;
  }
  return n > 1;
}

function nthPrime(n) {
  let counter = n;
  let iterator = 2;
  let result = [];

  while (counter > 0) {
    isPrime(iterator) && result.push(iterator) && counter--;
    iterator++;
  }

  return result;
}

for (let i = 0; i < 10; i++) {
  console.log(`${i} is prime: ${isPrime(i)}`);
}
