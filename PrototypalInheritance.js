let arr = ["Apurva","Aishwarya"];
let object = {
    name : "Apurva",
    city : "Banka",
    getIntro: function () {
        console.log(this.name + " from" + this.city);
    }
}
let object2 = {
    name: "Aman"
};

//Never do this
object2.__proto__ = object;