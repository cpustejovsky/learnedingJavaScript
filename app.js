function a() {
  console.log("a=1 invoked");
  return 1;
}

var a = () => {
  console.log("a=2 invoked");
  return 2;
};

function a() {
  console.log("a=3 invoked");
  return 3;
}

// var a = () => {
//   console.log("a=4 invoked");
//   return 4;
// };

console.log(a());
