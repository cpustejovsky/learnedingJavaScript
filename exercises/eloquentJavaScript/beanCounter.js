function characterCounter (string, character) {
    return string
        .split("")
        .filter((item) => {
            return item === character;
        })
        .length
};


console.log(characterCounter("BBC", "B"));
console.log(characterCounter("kakkerlak", "k"));