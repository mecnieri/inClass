'use strict';

//#region oob


//#endregion 

// let user = new Object();


// // es jobia vvv
let user_2 = {};

//JSON {}

let user = {
    name: "John",
    age: "33",

}


user_2.name = "User 2";
user_2.age = 30;

/*
{}         |
{          |  {
    name,  |      name,
    age    |      age, 
}          |   }
*/


user.isAdmin = true;
Object.defineProperty(user, "lastname", {
    value: 'Doe',
    writable: false,
    configurable: false,
    enumerable: true
})

// console.log(user.lastname);
// user.lastname = 'Smith';
// console.log(user.lastname);
// delete user.lastname;
// console.log(user.lastname);

// Object.defineProperties(user_2, {
//     name:{ value: "Test", writable: false,},
//     lastname:{value : "lastname", writable: false}
// })

// console.log(user.name,user['age'], user.isAdmin);
// delete user.age;

// console.log(user);

// let key = prompt("Enter key :", 'name', 'isAdmin');

// alert(user[key]);



// let empty = {};

// empty.name = "laptop";
// empty.price = 1200;
// empty.price = 1000;

// // console.log(empty.name,empty.price);

// delete empty.name;

// console.log(empty);


/*
property shedgeba 4 qvepropertisgan 

value ,
writable, 
enumarable, 
configurable,

*/



let speed = 300;
let color = "black";
let year = 2018;

// this

let car = {
    speed,
    color,
    year,
    engine: 6.3,
    // beep: function(){
    // alert("PI PI PI");
    // }
    beep() {
        alert("PI PI PI");
    }
}

// let car_2 = car;

// Object.defineProperty(car, 'speed', {
//     value: speed,
//     enumerable: false,
// })

// console.log(car_2 == car);

// const myConst = {
//     name: "const",
// }
// myConst.new = 'new';


//  console.log(myConst);

//  myConst ={
//      name : "const",
//      new: "new",
//  }



let clone = Object.assign({}, user);
// console.log(user, clone);


// console.log(car);
// console.log('age' in car);
// console.log('engine' in car);

// for (let key in car) {
//     console.log(`key:${key}, value:${car[key]}`);
// }


// let salaries = {
//     John: 100,
//     Ann: 160,
//     Peter: 130
// }


// let sum = 0;
// for (let key in salaries) {
//     sum += salaries[key];
// }
// console.log(sum);


user.sayHi = function () {
    // alert("Hello")
    // alert(this.name);

}

// user.sayHi();
// user['sayHi']();

// car.beep();

// function blaBlaBla() {
//     // alert(this);
// }
// blaBlaBla();


// let userV2 = {
//     name: "javascript",
//     sayHi() {
//         let func = () => alert(this.name);
//         func()
//     }
// }

// userV2.sayHi();


// let calculator = {
//     read() {
//         this.x = Number(prompt("enter number here"));
//         this.y = Number(prompt("enter number here"));
//     },

//     sum() {
//         return this.x + this.y;
//     },

//     mul() {
//         return this.x * this.y;
//     },
// }

// console.log(calculator);
// calculator.read();
// alert(calculator.sum());
// alert(calculator.mul());
