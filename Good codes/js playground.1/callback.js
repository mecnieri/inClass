
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
