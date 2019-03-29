promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve();
    }, 3000);
});

promise
    .then(() => console.log('yay! it\'s finished!'))
    .then(() => console.log('w00t! w00t! this also ran!'))
    .catch(()=> console.log('oh noooooes!'))

console.log(promise);
console.log('JavaScript is synchronous: 1');
console.log('JavaScript is synchronous: 2');
console.log('JavaScript is synchronous: 3');
console.log('JavaScript is synchronous: 4');
console.log('JavaScript is synchronous: 5');
console.log('JavaScript is synchronous: 6');
console.log('JavaScript is synchronous: 7');
console.log('JavaScript is synchronous: 8');
console.log('JavaScript is synchronous: 9');
console.log('JavaScript is synchronous: 10');