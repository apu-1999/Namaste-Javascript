let name = {
    firstName: "Apurva",
    lastName: "Singh"
}
let printFullName = function (hometown, state, country) {
    console.log(this.firstName + " " + this.lastName + " from " + hometown + " , " + state + " " + country);
}
let printMyName = printFullName.bind(name, "Banka", "Bihar", "India");
printMyName();
//OR
// let printMyName = printFullName.bind(name,"Banka","Bihar");
// printMyName("India");

Function.prototype.myBind = function (...args) { //If we keep any method in Function.prototype, then each and every methods has access to this method
    let obj = this  //printFullName can be acessed here with the help of this keyword
    params = args.slice(1);
    return function (...args2) {
        obj.call(args[0], [...params, ...args2])  // name obj
    }
}
let printMyName2 = printFullName.myBind(name, "Banka", "Bihar", "India");
printMyName();