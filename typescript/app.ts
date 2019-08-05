const answer = [x => x + "bar", x => x + 2].map(fn => fn("foo"));
console.log(answer);
