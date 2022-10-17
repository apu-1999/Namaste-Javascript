const cart = ["shoes", "socks", "sandals", "mojeries"];

//Consumer Code
const promise = createOrder(cart);
//console.log(promise);

promise.then(function (orderId) {
    console.log(orderId);
    return orderId;
})
.then(function(orderId){
    return proceedToPayment(orderId);
})
.then(function(paymentInfo){
    console.log(paymentInfo);
})
.catch(function(err){
    console.log(err.message);
})
.then(function(paymentInfo){
    console.log("No matter what happens, I'll execute always!");//This will definitely be called even if it has errors
})


//Producer Code
function createOrder(cart) {
    const pr = new Promise(function (resolve, reject) {
        
        //Rejecting the promise
        if(!validateCart(cart)){
            const err = new Error("Cart is not valid");
            reject(err);
        }

        //Resolving the promise

        const orderId = "123456";
        if(orderId){
            setTimeout(function () {
                resolve(orderId);
            }, 5000);
        }
    });

    return pr;
}

function proceedToPayment(orderId) {
    return new Promise(function (resolve, reject) {
        resolve("Payment Successful!");
    })
}

function validateCart(cart) {
    return false;
}
