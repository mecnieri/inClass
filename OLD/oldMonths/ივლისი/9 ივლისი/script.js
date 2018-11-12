

// SCOPE, ENVIROMENT

// first-class citizen 

// local scope, block scope => lexical scope | Enviroment

// {
//     // block scope
// }

// function a() {
//     //local scope
// }


// // შიდა და გარე კონტექსტები

// // outer Enviroment
// let text = "My text";

// function tell(name) {
//     // inner Enviroment
//     console.log(`${text}, ${name}`);
// }

// tell("Gela");

// // წვდომა. შიგნიდან გარეთ წვდება, პირიქით არა. 
// // inner => outer 
// // outer => null 

// function saySomething(firstname, lastname) {

//     function getFullName() {
//         return `${firstname} ${lastname}`;
//     }
//     console.log(`hello, ${getFullName()}`);
//     console.log(`bye, ${getFullName()}`);
// }



// function counter() {
//     let count = 0;
//     return function () {
//         return (count += 1);
//     }

// }


// saySomething("Gela", "Jaba");

// let myCounter = counter();
// let myCounter2 = counter();

// // [[Enviroment]]
// // console.log("_______________________");
// // console.log(myCounter());
// // console.log(myCounter());
// // console.log(myCounter());
// // console.log(myCounter());
// // console.log(myCounter());
// // console.log(myCounter());
// // console.log(myCounter());
// // console.log(myCounter());
// // console.log("_______________________");

// // console.log(myCounter2());
// // console.log(myCounter2());
// // console.log(myCounter2());
// // console.log(myCounter2());
// // console.log(myCounter2());
// // console.log(myCounter2());
// // console.log(myCounter2());
// // console.log(myCounter2());
// // console.log(myCounter2());
// // console.log(myCounter2());
// // console.log("_______________________");
// // console.log(counter()());
// // console.log(counter()());
// // console.log(counter()());
// // console.log(counter()());
// // console.log(counter());
// // console.log(counter());
// // console.log(counter());

// {
//     let message = "Hello from block scope!"
//     console.log(message);
// }

// // console.log(message);

// // IIFE 
// // ()პრიორიტეტის ნიშანი 

// (function name() {
//     let message = "Hello from local scope!"
//     console.log(message);

// })();



// // let result = words.filter(word => a<b arr[i] <=b);



// // ex 26 
// function inBetween(from, to) {

//     return function (item) {
//         return (item >= from) && (item <= to);
//     }

// }



// function inArry(arr) {
//     return function (item) {
//         return arr.includes(item)
//     }
// }

// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// console.log(arr.filter(inBetween(3, 6)));
// console.log(arr.filter(inArry([1, 3, 4, 5, 15])));


// let myFunc = function () { }
// console.log(myFunc.prototype);

// Array.prototype.myVar = "MyVar"
// let newArr = new Array();

// // __proto__
// console.log(newArr.myVar);


let animal = {
    eats: true,
    walk() {
        console.log("Animal walks!...");
    }
}

let dog = {
    barks: true,
}

let Lekvi = {
    age: 1,
    __proto__: dog
}

dog.__proto__ = animal;
console.log(dog.eats);
console.log(dog.barks);
dog.walk();

console.log(Lekvi.barks);
Lekvi.walk()
