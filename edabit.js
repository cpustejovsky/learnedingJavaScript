//https://edabit.com/challenge/MDixWSYxH5JZX3xo3

const deepFlatten = arr =>
    [].concat(...arr.map(v => (Array.isArray(v) ? deepFlatten(v) : v)));

const birdCode = arr => {
    let acronymArray = [];
    for (let i = 0; i < arr.length; i++) {
        let tempArray = arr[i].split(" ");
        for (let j = 0; j < tempArray.length; j++) {
            if (tempArray[j].includes("-")) {
                tempArray[j] = tempArray[j].replace("-", " ");
                console.log(tempArray);
            }
        }
        if (tempArray.length === 1) {
            resultString = tempArray[0].slice(0, 4).toUpperCase();
            acronymArray.push(resultString);
        }
        if (tempArray.length === 2) {
            resultString =
                tempArray[0].slice(0, 2).toUpperCase() +
                tempArray[1].slice(0, 2).toUpperCase();
            acronymArray.push(resultString);
        }
        if (tempArray.length === 3) {
            resultString =
                tempArray[0].slice(0, 1).toUpperCase() +
                tempArray[1].slice(0, 1).toUpperCase() +
                tempArray[2].slice(0, 2).toUpperCase();
            acronymArray.push(resultString);
        }
        if (tempArray.length === 4) {
            resultString =
                tempArray[0].slice(0, 1).toUpperCase() +
                tempArray[1].slice(0, 1).toUpperCase() +
                tempArray[2].slice(0, 1).toUpperCase() +
                tempArray[3].slice(0, 1).toUpperCase();
            acronymArray.push(resultString);
        }
    }
    console.log(acronymArray);
};

birdCode(["American Redstart", "Northern Cardinal"]); // ["AMRE","NOCA"]
birdCode(["Bobolink", "American White Pelican"]); // ["BOBO","AWPE"]
birdCode(["Great American White Pelican"]); // ["GAWP"]
birdCode(["Black-Capped Chickadee", "Common Tern"]); // ["BCCH", "COTE"]

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
