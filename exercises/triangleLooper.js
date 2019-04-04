function triangleLooper(char, size) {
    let character = char;
    for (let i = 0; i < size; i++) {
        console.log(character);
        character += char;
    }
};

triangleLooper('#', 7);
triangleLooper("@", 8);
triangleLooper("$", 9);