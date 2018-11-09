// first-class citizen
// local scope, block scope => lexical scope|Environment

/*
{
    // block scope
}

function a() {
    // local scope
}

*/

// outer Environment
let text = "My text";

function tell(name){
    // inner Environment
    console.log(`${text}, ${name}`);
}
//
// inner -> outer
// outer -> null 

// tell("Gela");

function saySomething(firstname, lastname){

    // private function
    function getFullName(){
        return `${firstname} ${lastname}`;
    }

    console.log(`Hello, ${ getFullName() }`);
    console.log(`Bye, ${ getFullName() }`);
}


function counter(){
    let count = 0;
    // (2 - 5) * 3
    return function(){
        return (count += 1);
    }

    // return undefined
}

// saySomething("FirstName", "LastName");

let myCounter = counter();
let myCounter2 = counter();

// console.log( counter()()  )
// [[Environment]]
// console.log("----------------------------")
// console.log(myCounter())
// console.log(myCounter())
// console.log(myCounter())
// console.log(myCounter())
// console.log("----------------------------")
// console.log(myCounter2())
// console.log(myCounter2())
// console.log(myCounter2())
// console.log(myCounter2())
// console.log(myCounter2())

// {
//     let message = "hello from block scope!";
//     console.log(message);
// }

// IIFE

// (function(){
//     let message = "hello from local scope!";
//     console.log(message);
// })();


function inBetween(from, to){
    return function(item){
        return (item >= from) && (item <= to);
    }
}

function inArray(arr){
    return function(item){
        return arr.includes(item);
    }
}

let arr = [1,2,3,4,5,6,7,8,9];
// console.log(arr.filter(inBetween(3, 6)));
// console.log(arr.filter(inArray([1,2,8, 13])));

// prototype -> Object()

// let myFunc = function(){}
// // console.log(myFunc.prototype);
// Array.prototype.myVar = "MyVar Value";
// let newArr = new Array();

// newArr.myVar = "new"
// console.log(Array.prototype.myVar)
// console.log(newArr.__proto__.myVar)
// __proto__

let animal = {
    eats: true,
    walk() {
        console.log("Animal walk!...");
    }
}
let dog = {
    barks: true
}

dog.walk = function(){
    console.log("Run dog, Run Dog.");
}

dog.__proto__ = animal;
let Lekvi = {
    age: 1,
    __proto__: dog
}
// console.log(dog.eats)
// console.log(dog.barks)
// dog.walk();
// console.log(Lekvi.barks)
// console.log(Lekvi.eats)
// Lekvi.walk();

let refFunc = function(){
    console.log(arguments.callee);
}


refFunc()