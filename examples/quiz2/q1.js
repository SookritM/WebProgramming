var x = 1;
function a() {
  y = 3;
  console.log(x, y);
  function b() {
    y = 4;
    var x = 3;
    z = 5;
    console.log(x, y, z);
  }
  b();
  console.log(x, y, z);
}
a();
console.log(x, z);
console.log(y);