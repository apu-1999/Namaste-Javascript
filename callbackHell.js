// console.log("Welcome");

// setTimeout(function () {
//     console.log("Back");
// }, 4000);

// console.log("Apurva");

/* E-Commerce Example */

const cart = ["jacket", "shoes", "earrings", "jeans"];

api.createOrder(cart, function () {
    api.proceedToPayment(function () {
        api.showOrderSummary(function () {
            api.updateWallet()
        })
    })
})

//This structure of code in which one callback is inside the other is known as callback hell

/* Inversion of Control Example */
api.createOrder(cart, function () {
    api.proceedToPayment()
})

