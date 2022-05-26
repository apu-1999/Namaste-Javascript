//Function Currying using bind method:-

/*let multiply = function (x, y) {
    console.log(x * y);
}
let multiplyByTwo1 = multiply.bind(this, 2); 
multiplyByTwo1(5);//->10

let multiplyByThree = multiply.bind(this, 3); //10
multiplyByThree(5); //15

let multiplyByTwo2 = multiply.bind(this,2,3); // As both the arguments are given, so it ignores the argument in multiplyByTwo fn.
multiplyByTwo2(5);

let multiplyByTwo3 = multiply.bind(this,); // As both the arguments are given, so it ignores the argument in multiplyByTwo fn.
multiplyByTwo3(2,3);*/

//Function Currying using closures:-

let multiply = function(x){
    return function (y) {
        console.log(x*y);
    }
}
let multiplyByTwo = multiply(2);
multiplyByTwo(3);//6
let multiplyByThree = multiply(3);
multiplyByThree(3);//9