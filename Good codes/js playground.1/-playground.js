// let dog = {


//     name: "amadeus",
//     jishi: "boxer",

// }

// dog.age = 2

// let aqvs = dog.name !== undefined;
// let aqvs2 = "jishi" in dog;
// console.log(aqvs2);
// console.log(aqvs);
// console.log(dog);


// var user = {};
// user.name = "Tom";
// user.age = 26;
// user.display = function () {
//     console.log(user.name); 
//     console.log(user.age);
// };

// for (let a in user) {
//     console.log(a + "" );
// }




// function createUser(pName, pAge) {
//     return {
//         name: pName,
//         age: pAge,
//         displayInfo: function() {
//             document.write("სახელი: " + this.name + " ასაკი: " + this.age + "<br/>");
//         }
//     };
// };
// // var tom = createUser("Tom", 26);
// // tom.displayInfo();
// console.log(createUser("Tom", 26).displayInfo);

// // var alice = createUser("Alice", 24);
// // alice.displayInfo();

// function createUser(pName, pAge) {
//     return {
//         name: pName,
//         age: pAge,
//         displayInfo: function () {
//             document.write("სახელი: " + this.name + ", ასაკი: " + this.age + "<br/>");
//         },
//         driveCar: function (car) {
//             document.write(this.name + " ატარებს მანქანას მარკით " + car.name + "<br/>");
//         }
//     };
// };

// function createCar(mName, mYear) {
//     return {
//         name: mName,
//         year: mYear
//     };
// };
// var tom = createUser("ტომი", 26);
// tom.displayInfo();

// var bently = createCar("ბენტლი", 2004);
// tom.driveCar(bently);
// console.log(bently);

// let arr = [1,23,4,4]
// console.log(arr);

// function User (name, age) {
//     this.name = name;
//     var _age = age;
//     this.displayInfo = function(){
//         document.write("სახელი: " + this.name + "; ასაკი: " + _age + "<br>");
//     };
//     this.getAge = function() {
//         return _age;
//     }
//     this.setAge = function(age) {
//         if(typeof age === "number" && age >0 && age<110){
//             return _age = age;
//         } else {
//             console.log("არასწორი მნიშვნელობა");
//         }
//     }
// }

// var tom = new User("Том", 26);
// // console.log(tom._age); // undefined - _age - ლოკალური ცვლადი
// // console.log(tom.getAge()); // 26
// // tom.setAge(32);
// // console.log(tom.getAge()); // 32
// // tom.setAge("54");

// console.log(tom);
// console.log(tom["setAge"]);


// for (let i = 0; i < 12; i++) {
//     i
//     let b = 21
//     // console.log(b);
// }
// console.log(i);
// console.log(b);

// var i = 50;

// for (  i = 0; i < 12; i++) {
//     i
//     var b = 21
//  }
// console.log(i);
// console.log(b);

// let a = "gio"
// let a = "sad"
// // console.log(a);

// const andza = function () {
//     console.log("dasd");
// }
// andza()


// var printNumTwo;
// for (var i = 0; i < 3; i++) {
//     if (i === 2) {
//         printNumTwo = function () {
//             return i;
//         };
//     }
// }
// console.log(printNumTwo());

// var printNumTwo;
// for (let i = 0; i < 3; i++) {
//     if (i === 2) {
//         printNumTwo = function () {
//             return i;
//         };
//     }
// }
// console.log(printNumTwo());

'use strict';
// var printNumTwo;
// for (var i = 0; i < 3; i++) {
//     if (i === 2) {
//         printNumTwo = function () {
//             return i;
//         };
//     }
// }
// console.log(printNumTwo());

// let printNumTwo;
// for (let i = 0; i < 3; i++) {
//     if (i === 2) {
//         printNumTwo = function () {
//             return i;
//         };
//     }
// }
// console.log(printNumTwo());

// function toCamelCase(str) {
//     while (str.includes("-")) {
//         //  str.charAt(str.indexOf("-") + 1).toUpperCase();
//          str.replace("-", "");
//     }
//     return str;
// }


// console.log(toCamelCase("the-stealth-warrior"));



// let restaurant = {
//     name: "ASB",
//     capacity: 75,
//     guests: 0,
//     seatParty(seatParty) {
//         var seatsLeft = this.capacity - this.guests - seatParty
//         seatsLeft
//         // return this.seatsLeft
//     },
// removeParty(removeParty) {
//     seatsLeft
//     seatsLeft += removeParty
//     return seatsLeft
// }
// checkAvialability(partySize) {
//     // seatsLeft = this.capacity - this.guests
//     seatsLeft
//     return seatsLeft >= partySize
// },
// }
// console.log(seatsLeft);
// restaurant.seatParty(72);
// // console.log(restaurant.checkAvialability(4));
// seatsLeft

// const Person = function (saxeli, gvari, asaki) {
//     console.log(this);
//     this.firstName = saxeli
//     console.log(this);
//     this.lastName = gvari
//     console.log(this);
//     this.age = asaki
//     console.log(this);
// }


// const me = new Person("Gio", "Abzianidze", 26)
// me


// const you = new Person("Natura", "Gatenashvili", 26)
// you



// let w = "gamarjoba";
// let guessed = []
// for (let i = 0; i < w.length; i++) {
//     guessed.push("_")
// }
// guessed

// let a = "d"
// let arr = []


// for (let i = 0; i <= w.length; i++) {
//     if (a === w[i]) {
//         guessed[i] = w[i]
//     }
// }
// guessed

// let p = document.querySelector('p')
// console.log(p);
// p.remove()
// console.log(p);
// console.log(p);

// EXERCISE 2 
// let salaries = {
//     John: 100,
//     Ann: 160,
//     Peter: 130
// }

// let sum = 0;
// for (a in salaries) {
//     sum += salaries[a]
// }
// sum

let product = {}
product.name = "Laptop"
product.price = 1000
product.price = 1200
console.log(product)

let arr = []
for (let a in product) {
    arr.push(a)
    arr.push(product[a])
}


// console.log(arr);
// const user = { n: "d" }

// let cl = Object.assign({}, [product,user])
// console.log(cl);


// user.n = "daee"

// console.log(user);

// console.log(typeof (user));

// let user = {
//     name: "John",
//     age: 30,
//     good() {
//         alert("good")
//     }
// };
// user.sayHi = function () {
//     alert(this.name + " hello");
// };
// user.sayHi()
// //  user.good(  )
// console.log(user);

// (() => console.log(32+2))()

















