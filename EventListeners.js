//Callback functions
setTimeout(function () {
    console.log("Timer");
}, 5000);

function x(y) {
    console.log("x");
    y();
}
x(function y() {
    console.log("y");
})


function attachEventListeners() {
    let count = 0;
    document.getElementById("clickMe").addEventListener("click", function xyz() {
        console.log("Button Clicked", ++count);
    });
}
/*Callback fn here is forming a closure with its count and we are enclosing all these code inside
a fn attachEventListeners to achieve data hiding*/
attachEventListeners();