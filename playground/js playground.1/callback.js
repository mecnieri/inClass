
// first class sitizen

function say(message = "hello", personFunc) {
    personFunc(message)
}

function helloJohn(message) {
    console.log(`${message}, My name is John`);
}


function helloMary(message) {
    console.log(`${message}, My name is Mary`);
}

//personFunc = helloJohn
say("I am from Georgia", helloJohn)


//personFunc = helloMary
say("I am from USA", helloMary)


say(undefined, helloMary)


// What is a Callback?
// Simply put: A callback is a function that is to be executed
// after another function has finished executing — hence the name ‘call back’.

// More complexly put: 
// In JavaScript, functions are objects.
// Because of this, functions can take functions as arguments, 
// and can be returned by other functions.
// Functions that do this are called higher-order functions.
// Any function that is passed as an argument is called a callback function.