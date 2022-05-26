/*1:- In an object,this refers to an object that belongs to
  2:- In function, this refers to global object
  3:- Alone this refers to global object
  4:- this is undefined in strict mode inside function */



const person = {
    nameOfPerson: "Apurva",
    greet: function () {
        console.log("Hi " + this.nameOfPerson);
    }
};
console.log(person.greet());//Hi Apurva

console.log(this == window); // true bcoz this refers to window object
this.username = "ApurvaS";
console.log(username);//ApurvaS

function foo(){
    'use strict'
    return this;
}
console.log(foo())//Undefined bcoz of strict mode