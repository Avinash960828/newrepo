// for to save the pollution from the global scope variable we use iife => immediately invoked expression

(function chai () {
    console.log('DB CONNECTED');

})();


// pollution of declaration ko hatane ke liye we use iife


((name)=>{
    console.log(`DB CONNECTED2 ${name}`);
})('avinash')