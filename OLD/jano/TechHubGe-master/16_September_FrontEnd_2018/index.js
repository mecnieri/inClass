const MathFun = require('./mathfun');

let processResults = ( err, result, time ) => {
    if( err ){
        console.log( `Error: ${ err.message }`);
    }
    else {
        console.log( `Result is - ${result}, time - ${time}ms` );
    }
}


for ( let i = 0; i < 10; i++){
    console.log("Calling EvenDoubler", i);
    MathFun.evenDoubler(i, processResults);
}
console.log(`MathFun.maxTime - ${MathFun.maxTime}`)