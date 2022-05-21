/*console.log(b);//cannot access a before initialization as a is in a temporal dead zone
var a = 10;
console.log(window.b);//undefined bcoz it is stored in some other space not in global space
console.log(this.b);
let b = 20;
console.log(b);//20*/

let a = 10;
//let a = 100;//can't do this redeclaration in let
 var b = 20;
 var b = 30;
 console.log(b);