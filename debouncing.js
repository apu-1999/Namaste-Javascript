//Debouncing in Javascript

let counter = 0;
const getData = () =>{
    //calls an API and gets the data
    console.log("Fetching data...",++counter);
};

const debounce = function (fn, delay) {
    let timer;
    return function () {
        let context = this,
        args = arguments; 
        clearTimeout(timer);
        timer = setTimeout(() => {
            fn(context,args);
        }, delay);
    }
}
const betterFunction = debounce(getData, 300);//Only call getData method when the difference b/w
                                                 // the two keypress events is > 300 ms