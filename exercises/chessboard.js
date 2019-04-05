function chessBoardCreator(char, size) {
    let yAxis = 0;
    
    var xAxis;
    
    for (let j = 0; j < size; j++) {
        if (yAxis % 2 === 0) {
            xAxis = char
        } else {
            xAxis = " "
        }
        for (var i = 0; i < size; i++) {
            if (xAxis[i] === " ") {
                xAxis += char;
            }
            else if (xAxis[i] === char) {
                xAxis += " ";
            } 
        }
        console.log(xAxis);
        yAxis++;
    }
}

chessBoardCreator("#", 10);
console.log("-".repeat(20));
/*
So why is Marijn Haverbeke's function better than mine?

Well it is shorter, cleaner, and easier to inuit.

Specifically?

He realized the x-axis will go from even to odd each time.
0: even
1: odd
2: even
3: odd
4: even
5: odd
6: even
7: odd
8: even

And so on...

How to make it switch up all chessboard like? Add the y axis to the incrementing x-axis 
When you add 1, it makes the order different
1: odd
2: even
3: odd
4: even
5: odd
6: even
7: odd
8: even
9: odd

And when you add 2, it'll look just like it did at 0
2: even
3: odd
4: even
5: odd
6: even
7: odd
8: even
9: odd
10: even

And so on...
*/ 

function betterChessBoardCreator(char, size) {
    let board = "";

    for (let y = 0; y < size; y++) {
        for (let x = 0; x < size; x++) {
            if ((x + y) % 2 == 0) {
                board += " ";
            } else {
                board += char;
            }
        }
        board += "\n";
    }

    console.log(board);
    };

betterChessBoardCreator("#", 10);