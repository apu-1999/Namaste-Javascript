/*function a() {
   console.log(b); //undefined
}
a();
var b = 10;
console.log(b); //10*/
/*function a() {
    console.log(b); //undefined
}

var b = 10;
a();*/

/*function a(){
    c();
    function c(){
        console.log(b);//10
    }
}
var b = 10;
a();*/

function a(){
    var b = 10;
    c();
    function c(){
        console.log(b);//10
    }
}
a();
console.log(b);//Not defined