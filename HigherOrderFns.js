/*function x() {
    console.log("Hello");
}
function y(x) { //y->Higher Order Fn & x->Callback Fn
    x();
}*/

//Function to find the area of the circles in a list
/*const radius = [3, 1, 2, 4, 5];
const calculateArea = function (radius) {
    const area = [];
    for (let i = 0; i < radius.length; i++) {
        area.push(Math.PI*radius[i]*radius[i]);
    }
    return area;
}
console.log(calculateArea(radius));

//Function to find the circumferance of the circles in a list
const calculateCircumferance = function (radius) {
    const circumferance = [];
    for (let i = 0; i < radius.length; i++) {
        circumferance.push(2*Math.PI*radius[i]);
    }
    return circumferance;
}
console.log(calculateCircumferance(radius));

//Function to find the diameter of the circles in a list
const calculateDiameter = function (radius) {
    const diameter = [];
    for (let i = 0; i < radius.length; i++) {
        diameter.push(2*radius[i]);
    }
    return diameter;
}
console.log(calculateDiameter(radius));*/

/*These methods are the generic methods for calculating diameter,circumferance & area.
But these methods has some problem
(i) DRY Principle:- Don't repeat Yourself(Here we are repeating the codes) */

//Optimized Code
const radius = [3, 1, 2, 4, 5];
const area = function (radius) {
    return Math.PI * radius * radius;
}
const circumferance = function (radius) {
    return 2 * Math.PI * radius;
}
const diameter = function (radius) {
    return 2 * radius;
}
const calculate = function (radius, logic) {
    const output = [];
    for (let i = 0; i < radius.length; i++) {
        output.push(logic(radius[i]));
    }
    return output;
}
console.log(calculate(radius, area));
//or we can write the same function calculate directly as map fn which is provided by JS
console.log(radius.map(area));
console.log(calculate(radius, circumferance));
console.log(calculate(radius, diameter));

// Or we can write our own implementation of map
Array.prototype.calculator = function ( logic) {
    const output = [];
    for (let i = 0; i < this.length; i++) {
        output.push(logic(this[i]));
    }
    return output;
}
console.log(radius.calculator(area));