// var colors = [ 'red', 'blue', 'green' ];
//
// for (var i = 0; i < colors.length; i++) {
//     console.log(colors[i]);
// }
//
// colors.forEach(function(color) {
//     console.log(color);
// });
//
// colors.forEach((color) => console.log(color));

var images = [
    { height: 10, width: 30 },
    { height: 20, width: 90 },
    { height: 54, width: 32 }
];
var areas = [];

images.forEach((image) => areas.push(image.height * image.width));

console.log(areas);
