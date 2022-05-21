/*function x() {
     var a = 10;
     function y() {
         console.log(a);//10 bcoz of lexical scope
     }
     y();
}
x();*/

function x() {
    let a = 10;
    function y() {
        console.log(a);
    }
    return y;
}
//x()();//or
var close = x();
close();