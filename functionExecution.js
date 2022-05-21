var x = 1;
a();//10 bcoz in memory allocation phase, memory stores the copy of the function code and a new ec is created at the time of function invocation
b();//20
console.log(x);// undefined will be replaced by 1 in code execution phase
function a() { 
    //console.log(x); //x will be undefined here bcoz of memory allocation phase
    var x = 10;
    console.log(x);
}
function b() {
    var x = 20;
    console.log(x);
}