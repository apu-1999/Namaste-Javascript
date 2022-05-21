/*function x() {
    var i = 10;
    setTimeout(() => {
        console.log(i);
    }, 4000);
    console.log("Hello");
}
x();*/

// Function to print 1 in 1000ms, 2 in 2000 ms,.....upto 5 in 5000ms

/*function x() {
    for (var index = 1; index < 6; index++) {
        setTimeout(function(){
            console.log(index);
        },index*1000);
        console.log("Namaste");
    }
}
x();*/
/*This code will print 6 everytime bcoz
(i)  Because of closures, it remembers the reference of every index it goes through for loop.
(ii) Because of setTimeout fn, it stores all the callback fn with a timer of index*1000 ms.
As JS engine stops for nothing, it will print Namaste first and everytime it remembers its lexical scope and sets a callback 
fn for the specified time, so until the timer expires for every index the control goes to i=6 
and prints 6 everytime*/
 
/*function x() {
    for (let index = 1; index < 6; index++) {
        setTimeout(function(){
            console.log(index);
        },index*1000);
        console.log("Namaste");
    }
}
x();*/
/*This code will work correctly as 1 2 3 4 5 bcoz
let has a block scope and each time loop runs, callback fn has na new reference of index with it,
so this fn forms a closure with a new variable with it everytime */

function x() {
    for (let index = 1; index < 6; index++) {
        function close(x) {
            setTimeout(function(){
                console.log(x);
            },x*1000);
        }
        close(index);
        console.log("Namaste");
    }
}
x();
/*Second method in case we don't have to use let:-
Everytime we call close fn, it creates a new copy of index over here*/