//https://edabit.com/challenge/MDixWSYxH5JZX3xo3

const birdCode = arr => {
    for (let i = 0; i < arr.length; i++) {
        let tempArray = arr[i].split(" ");
        for (let j = 0; j < tempArray.length; j++) {
            if (tempArray[j].includes("-")) {
                tempArray[j] = tempArray[j].split("-");
            }
        }
        if (tempArray.length === 1) {
            resultString = tempArray[0].slice(0, 4).toUpperCase();
            console.log(resultString);
        }
        if (tempArray.length === 2) {
            resultString =
                tempArray[0].slice(0, 2).toUpperCase() +
                tempArray[1].slice(0, 2).toUpperCase();
            console.log(resultString);
        }
        if (tempArray.length === 3) {
            resultString =
                tempArray[0].slice(0, 1).toUpperCase() +
                tempArray[1].slice(0, 1).toUpperCase() +
                tempArray[2].slice(0, 2).toUpperCase();
            console.log(resultString);
        }
        if (tempArray.length === 4) {
            resultString =
                tempArray[0].slice(0, 1).toUpperCase() +
                tempArray[1].slice(0, 1).toUpperCase() +
                tempArray[2].slice(0, 1).toUpperCase() +
                tempArray[3].slice(0, 1).toUpperCase();
            console.log(resultString);
        }
    }
};

birdCode(["Black-Capped Chickadee", "Common Tern"]); // ["BCCH", "COTE"]
birdCode(["American Redstart", "Northern Cardinal"]); // ["AMRE","NOCA"]
birdCode(["Bobolink", "American White Pelican"]); // ["BOBO","AWPE"]
birdCode(["Great American White Pelican"]); // ["GAWP"]

//needs to split along "-" also
// let resultString;
// stringArray.forEach(element => {
//     if (element.split("-").length === 2) {
//         element = element.split("-");
//         resultString =
//             element[0].slice(0, 1).toUpperCase() +
//             element[1].slice(0, 1).toUpperCase();
//         console.log(resultString);
//     } else {
//         resultString =
//             stringArray[0].slice(0, 2).toUpperCase() +
//             stringArray[1].slice(0, 2).toUpperCase();
//         console.log(resultString);
//     }
// });
