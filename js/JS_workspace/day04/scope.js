/* function myFunc() {
  if(true) {
    let a = 10;
    console.log(a); // 10
  }
  // console.log(a); // ReferenceError: a is not defined
}
myFunc();
// console.log(a); // ReferenceError: a is not defined
 */

/* let x = 10;
function myFunc2() {
  let x = 20;
  x = 30;
  console.log(x); // 30
}
myFunc2();

console.log(x); // 10
 */

global.x = 10;
function myFunc3() {
  let x = 20;
  global.x = 30;
  console.log(x);
}
myFunc3();
console.log(global.x);