function minimum (num1, num2) {
    if (num1 > num2) {
        return num2;
    } else if (num1 < num2) {
        return num1;
    } else {
        return `there appears to be no minimum number when comparing ${num1} and ${num2}`
    }
}

console.log(minimum(0, 10));
console.log(minimum(0, -10));