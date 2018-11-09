// &&, ||, !, 

let operator = '+';

let num1 = 1, num2 = 3;
// if( operator === '+') {
//     console.log(`num1 + num2 = ${num1 + num2}`);
// }

switch(operator){
    default: 
        // console.log("try again.");
    case "+":
        // console.log(`num1 + num2 = ${num1 + num2}`);
        break;
    case "-":
        // console.log(`num1 - num2 = ${num1 - num2}`);
    break;
}

// first class citizen

function say(message = "Hello", personFunc){
    personFunc(message);
}
function helloJohn(message){
    console.log(`${message}, My Name is John`)
}
function helloMary(message){
    console.log(`${message}, My Name is Mary`)
}
// personFunc = helloJohn
// say("I am from Georgia", helloJohn);

// personFunc = helloMary
// say("I am from USA", helloMary);
// say(undefined, helloMary);

let User = {
    name: "Gela",
    age: 13,
    isPupil: true,
    printInfo: function(){
        console.log(`${User.name}, ${User.age}, ${User.isPupil}`)
    }
}


function info({age, name, printInfo}){
    console.log(`Age is ${age}, Name is ${name}`)
    printInfo()
}

// User.printInfo();
// info(User);

function Person(name, lastname){
    this.name = name;
    this.lastname = lastname;

    this.print = function(){
        console.log(`${this.name} ${this.lastname}`);
    }
}

// DRY
let john = new Person("John", "Smith");
let emma = new Person("Emma", "Watson");
let jimi = new Person("Jimi", "Hendricks");

// john.print()
// emma.print()
// jimi.print()

let date = new Date();

// console.log(date.toString())


// window.onload = () =>{

// }


document.addEventListener('DOMContentLoaded', (event) => {
    let h1 = document.getElementsByTagName('h1')[0];
    h1.innerHTML = "Hello <small><small>from</small></small> JS";
    h1.style.color = "red";
    h1.style.padding = "10px";
    h1.style.backgroundColor = "#eee";
    h1.style.textAlign = "center";

    h1.addEventListener('click', (event) => {
        setTimeout(greet, 3000)
    })

    // h1.classList
    // h1.className
})

// setTimeout,
// setInterval


function greet(){
    alert("SetTimeout()");
}

// 1000ms => 1 second
// setTimeout(() => alert("Arrow Function"), 1000)

// let timerId = setTimeout(say, 2000, "I am from Georgia", helloJohn);
// console.log(timerId)
// clearTimeout(timerId);

// let intervalId = setInterval(() => { 
//     alert("setInterval")
// }, 1000);

// setTimeout(() => {
//     clearInterval(intervalId);
//     alert("Stop Interval");
// }, 5000)


// setTimeout(say, 0, "I am from Georgia", helloJohn);

// alert("Hello")

function s(){
    john.print()
    emma.print()
    jimi.print()
    setTimeout(say, 0, "I am from Georgia", helloJohn);
    // alert("Hello")
    john.print()
    emma.print()
    jimi.print()
}


let i = 0;
let start = Date.now();

// function count(){
//     for(let j = 0; j < 2e9; j++){
//         i++;
//     }
//     alert(`Done ${Date.now() - start} ms`);
// }

// count();



function count2() {
    do {
        i++;
    }
    while(i % 1e6 != 0);
    if( i == 2e9 ){
        alert(`Done ${Date.now() - start} ms`);
    }
    else {
        setTimeout(count2, 0)
    }
}

// count2();
// s();

function printNumbersTimeout(from, to){
    let current = from;
    setTimeout(function go() {
        alert(current);
        if( current < to){
            setTimeout(go, 1000)
        }
        current++;
    }, 1000)
}
function printNumbersInterval(from, to){
    let current = from;

    let timerId = setInterval( () => {
        alert(current);
        if( current == to){
            clearInterval(timerId);
        }
        current++;
    }, 1000);
}
// printNumbersTimeout(1, 5);
// printNumbersInterval(1, 5);

// Closure
function add(first, second){
    return first + second;
}
function sub(first, second){
    return first - second;
}
function mul(first, second){
    return first * second;
}
function identityf(x){
    return function(){
        return x;
    }
}
function addf(first){
    return function(second){
        return first + second;
    }
}
function liftf(binary){
    return function(first){
        return function(second){
            return binary(first, second)
        }
    }
}

function curry(binary, first){
    return liftf(binary)(first);
}

let myX = identityf(8);
let addF = addf(8);
let myLift = liftf(sub);
let onePlus = curry(add, 1);
// console.log(myX())
// console.log(addF(5))
// console.log(myLift(8)(5))
console.log(onePlus(199))
