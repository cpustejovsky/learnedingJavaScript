function isEven(num) {     
    if (num < 0) {
        return isEven(Math.abs(num)); 
    } else if (num === 1) {
        return false;
    } else if (num === 0) {
        return true;
    } else {
        return isEven(num - 2);
    }
}

console.log(isEven(50));
// → true
console.log(isEven(75));
// → false
console.log(isEven(-1));

/* 
Why Marjin Haverbeke did a better job than me!
I wasn't returning the functions so I ended up created a clunkier and more verbose solution.
*/
