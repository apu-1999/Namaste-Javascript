/*{
    //Compound statement
    var a = 10;
    console.log(a);
}
if(true)//error bcoz JS expects here one statement*/

/*{
    var a = 10;
    let b = 20;
    const c = 30;
    console.log(a);//10
    console.log(b);//20
    console.log(c);//30
}
console.log(a);//10
console.log(b);// error(not defined) because let is block scoped
console.log(c);*/// error(not defined) because const is also block scoped

/*Shadowing*/
var a = 100;
let b = 200;
const c = 300;
{
    var a = 10;
    let b = 20;
    const c = 30;
    console.log(a);//10, a shadows the global var a = 100 and replaces it value with 10;
    console.log(b);//20
    console.log(c);//30
}
console.log(a);//10
console.log(b);//200// As let and const are block scoped...so its value will be the same as global 
console.log(c);//300