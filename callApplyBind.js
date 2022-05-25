/*let name = {
    firstName: "Apurva",
    lastName: "Singh",
    printFullName: function () {
        console.log(this.firstName + " " +  this.lastName);
    }
}
name.printFullName();

let name2 = {
    firstName: "Megha",
    lastName: "Rajput"
}

/*Function Borrowing using call method:- invoke a method directly by passing the ref
which points to the this variable inside the method*/
//name.printFullName.call(name2);

//--2nd method

let name3 = {
    firstName: "Apurva",
    lastName: "Singh",
}

let printFullName = function (hometown,state) {
    console.log(this.firstName + " " +  this.lastName + " " +  "from" + " " + hometown + "," + " " + state);
}

let name4 = {
    firstName: "Megha",
    lastName: "Rajput",
}
// printFullName.call(name3,"Banka","Bihar");
// printFullName.call(name4,"Bokaro","Jharkhand");

//Apply Method:- the only diff b/w call & apply method is the way we pass arguments
printFullName.call(name3,"Banka","Bihar");//-> in call, pass these arguments indivdually
printFullName.apply(name4,["Bokaro","Jharkhand"]);//->in apply, pass these arguments as an arraylist

//Bind method:- Used to keep a copy of method and use it later
let printMyName = printFullName.bind(name3,"Banka","Bihar");
console.log(printMyName);// a copy of fn printFullName
printMyName();// output

