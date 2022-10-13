// //Earlier callbacks

// const cart = ["shoes", "jeans", "shirts"];

// createOrder(cart, function () {
//     proceedToPayment();
// })

// //Using promises

// const promise = createOrder(cart);

// //{data:orderID}

// promise.then(function (orderID) {
//     proceedToPayment();
// })

const GITHUB_API = "https://api.github.com/users/apu-1999";

const user = fetch(GITHUB_API);

console.log(user);

user.then(function (data) {
    console.log(data);
})