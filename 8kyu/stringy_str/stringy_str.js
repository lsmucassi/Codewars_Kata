function stringy(size) {
  // your code here
  var wd = "";
  for(var i = 0; i < size; i++) {
    wd += i % 2 === 1 ? "0" : "1";
  }
  return wd;
}
