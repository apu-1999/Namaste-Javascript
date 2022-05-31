const loggerFunc = function(){
    console.count("Throttled Function");
}
const throttle = (fn, delay) =>{
    let flag = true;
    return function () {
        let context = this;
        let args = arguments;
        if(flag){
            fn.apply(context,args);
            flag = false;
            setTimeout(() => {
                flag = true;
            }, delay);
        }
    }
}

const betterLogFunction = throttle(loggerFunc, 1000);
window.addEventListener('resize',betterLogFunction);


// This is the normal Function without Throttling
//Check the console for the difference between the calls of Normal Function and the Throttled Function
const normalFunc = function () {
    console.count("Normal function");
}
window.addEventListener('resize',normalFunc);