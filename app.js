let symbol = "#";

for (let i = 0; i < 7; i++) {
    console.log(symbol);
    symbol += "#";
}

function triangleLooper (char, size) {
    let character = char;
    for (let i = 0; i < size; i++) {
        console.log(character);
        character += char;
    }
};

triangleLooper("@", 8);
triangleLooper("$", 9);