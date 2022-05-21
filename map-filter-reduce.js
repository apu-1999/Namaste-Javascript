const arr = [5, 3, 6, 2, 1];

//Fn to double the array values
const doubleElements = function (x) {
    return 2 * x;
}
//map function
console.log(arr.map(doubleElements));

//Fn to find the binary values
// const binaryElements = function (x) {
//     return x.toString(2);
// }
//Or

// console.log(arr.map(function(x) {
//     return x.toString(2);
// }));

//OR
console.log(arr.map(x => x.toString(2)));

//Filter fn:-

//Filter odd values:-
function isOdd(x) {
    return x % 2;
}
const output1 = arr.filter(isOdd);
console.log(output1);

//Filter odd values:-
function isEven(x) {
    return x % 2 === 0;
}
const output2 = arr.filter(isEven);
console.log(output2);

//Filter values greater than 4:-

// const output3 = arr.filter(function greaterThan4(x) {
//     return x>4;
// });
// console.log(output3);
//OR
console.log(arr.filter((x) =>  x > 4));//Arrow fn


//Reduce fn:- where we have to take all the elements of an array and come up with a single value out of thm

//sum of array in generic way:-
function findSum(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum;
}
console.log(findSum(arr));
//Same thing using reduce fn:-
const output4 = arr.reduce(function (acc,curr) {
    acc = acc + curr;
    return acc;
},0); // acc starts with 0, acc behaves as sum variable & curr behaves as arr[i]
console.log(output4);

//Max of array in generic way:-
function findMax(arr) {
    let max = 0;
    for (let i = 0; i < arr.length; i++) {
        if(max<arr[i]){
            max = arr[i];
        }
    }
    return max;
}
console.log(findMax(arr));
//Same thing using reduce fn:-
const output5 = arr.reduce(function (acc,curr) {
    if(acc < curr){
        acc = curr;
    }
    return acc;
},0);
console.log(output5);

//more Complex example:-
const users = [
    {firstName:'Apurva',lastName:'Singh',age:23},
    {firstName:'Ayush',lastName:'Singh',age:17},
    {firstName:'Sourav',lastName:'Singh',age:25},
    {firstName:'Shipra',lastName:'Singh',age:23}
];
//List of full names of all these users
console.log(users.map(function (x) {
    return x.firstName + " " +  x.lastName;
}));

//How many people have the same age:-
const listUser1 = users.filter((x)=> (x.age===25));
console.log(listUser1.length);

//{23:2,17:1,25:1,23:1}
const listUser2 = users.reduce(function (acc,curr) {
    if(acc[curr.age]){
        ++acc[curr.age];
    }
    else{
        acc[curr.age] = 1;
    }
    return acc;
},{});
console.log(listUser2);

//FirstName of all the peoples whose age is less than 24:-
/*const listUser3 = users.filter(function (x) {
    if(x.age<24){
        return x.firstName;
    }
}).map(x=>x.firstName);
console.log(listUser3);*/
//OR
const listUser3 = users.reduce( (acc, curr) =>{
    if(curr.age<24){
        acc.push(curr.firstName);
    }
    return acc;
},[]);
console.log(listUser3);