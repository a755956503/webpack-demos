const obj = {
  a: 1
};
let var1 = 1;
let var2 = 1;
export {
  obj,
  var1,
  var2
}
console.log(this);
obj.b = 2;
var1 = 2;