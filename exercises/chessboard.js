/*
 # # # #
# # # # 
 # # # #
# # # # 
 # # # #
# # # # 
 # # # #
# # # #

# # # #  
*/

let yAxis = 0;
var xAxis = "#";

for (var i = 0; i < 64; i++) {
    if (xAxis.length % 8 === 0) {
        xAxis += "\n";
    } 
    else if (xAxis[i] === " ") {
        xAxis += "#";
    }
    else if (xAxis[i] === "#") {
        xAxis += " ";
    } 
}
console.log(xAxis);