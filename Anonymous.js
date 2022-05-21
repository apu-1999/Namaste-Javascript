//a();//->a called
//b();
/*type error bcoz b is a varibale at the creation of memory so it contains undefined at the initial
phase and we are calling it through a function*/

//Function Statement aka Function Declaration
function a() {
    console.log("a called");
}
a();//-> a called

//Function Expression
var b = function () { //Function acts like a value
    console.log("b called");
}
b();//->b called

/* The major difference between function statement and function expression is hoisting */

//Anonymous Function
/*function (){ //invalid syntax error

}
These are used in a place where functions are used as values*/

//Named Function Expression
var c = function index() { 
    console.log("c called");
}
c();
//index();->error

//Parameters or Identifiers or Labels:- local variables inside the function scope
//Arguments:- values whihc are passed inside a function

//First Class Functions
//We can pass function inside another function as an arguments

var d = function (param1){ // param1->parameter
    //console.log(param1);
    return function () {
        
    }
}
//d(1); //1->argument
/*function xyz() {
    console.log("xyz called")
}
d(xyz);*///xyz called
console.log(d());//->prints an anonymous fn if we remove xyz implementation

//The ability to use a function as values is k/a first class function
//Functions are first class citizens(ability to be used like values) 