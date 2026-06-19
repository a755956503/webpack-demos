const obj = {
  a: 1
};
let var1 = 1;
let var2 = 11;
var3 = 111;
// module.exports = {
//   obj,
//   var1,
//   var2
// }
exports.obj = obj;
exports.var1 = var1;
console.log(this);
obj.b = 2;
var1 = 2;