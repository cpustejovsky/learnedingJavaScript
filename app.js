// console.log("this is the playground script!");
// const clog = val => console.log(val);
// str1 = "Hello";
// str2 = "There's never enough time to do all the nothing you want";

// function flip(string, type) {
//     let words = string.split(" ");
//     if (type === "word") {
//         let chars = "";
//         for (let i = 0; i < words.length; i++) {
//             chars += words[i].split("");
//             chars += " ";
//         }
//         return chars;
//     } else if (type === "sentence") {
//         let newString = "";
//         for (let i = 0; i < words.length; i++) {
//             newString += `${words[words.length - i - 1]} `;
//         }
//         return newString;
//     } else {
//         return 'Wrong type! Use "word" or "sentence"';
//     }
// }

// let test1 = flip(str1, "test");
// let test2 = flip(str1, "word"); // "olleH"
// let test3 = flip(str1, "sentence"); // "Hello"
// let test4 = flip(str2, "word"); // "s'erehT reven hguone emit ot od lla eht gnihton uoy tnaw"
// let test5 = flip(str2, "sentence"); // "want you nothing the all do to time enough never There's"

// clog(test1);
// clog(test2);
// clog(test3);
// clog(test4);
// clog(test5);

const nextEdge = (side1, side2) => {
    if (side1 <= 0 || side2 <= 0) return "Sides must by positive integers";
    return side1 + side2 - 1;
};

console.log(nextEdge(8, 10)); // 17
console.log(nextEdge(5, 7)); // 11
console.log(nextEdge(9, 2)); // 10
console.log(nextEdge(9, 0)); // 10
