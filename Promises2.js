// //Earlier callbacks

// const cart = ["shoes", "jeans", "shirts"];

// createOrder(cart, function () {
//     proceedToPayment();
// })

// //Using promises

 const promise = createOrder(cart);

 //{data:orderID}

 //Promise Chaining to solve the issue of callback hell
 promise.then(function (orderID) {
    return proceedToPayment(orderID);
 })
 .then(function (paymentInfo) {
   return showOrderSummary(paymentInfo);
 })
 .then(function (paymentInfo) {
   return updateWalletBalance(paymentInfo);
 })



const GITHUB_API = "https://api.github.com/users/apu-1999";

const user = fetch(GITHUB_API);

console.log(user);

user.then(function (data) {
    console.log(data);
})