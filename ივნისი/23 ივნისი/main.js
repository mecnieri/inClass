// // function makeUser() {
// //     return {
// //         name: "John",
// //         ref: this
// //     };
// // };

// // let user = makeUser();

// // console.log(user.ref);


// let ladder = {
//     step: 0,
//     up() {
//         this.step++;
//         return this;
//     },
//     down() {
//         this.step--;
//         return this;

//     },
//     showStep: function () {
//         // alert(this.step);

//     }
// }

// // ladder.up();
// // ladder.up();
// // ladder.down();
// // ladder.showStep();

// ladder.up().down().down().up().up().up().down().down().down().down().showStep();

// /////////////////////////////////////////////////////

// function greet() {
//     alert(this.name)
// }

// function say(time, phrase) {
//     alert(`${time} ${this.name} ${phrase}`)
// }

// // call, apply 

// let client = { name: 'client' }
// let admin = { name: 'admin' }
// let john = { name: 'John' }


// // greet.call(client) //this = client
// // greet.call(admin);  //this = admin
// // say.call(john, '10:00', 'Hello') //this = john


// // let message = ['10:00', 'Hello'];

// // say.apply(john, message); 



// // let id = Symbol('id');
// // let id1 = Symbol('id');
// // console.log(id == id1);

// // john[id] = "ID Value";

// // console.log(john[id]);

// // console.log(john);

// // for (let key in john) {
// //     console.log(key);
// // }

// // let customer = {
// //     name: 'Super',
// //     [id]: 140
// // }

// // console.log(customer);



// // function User(name) {
// //     // this => {}
// //     this.name = name;
// //     this.isAdmin = false;
// //     this.sayHello = function () {
// //         alert(`My Name is : ${this.name}`)        
// //     }
// // }


// // let conUser = new User("new user");
// // console.log(conUser);
// // conUser.sayHello();

// /////////////////////////////////////////////////////////

// // let calculator = {
// //     read() {
// //         this.x = Number(prompt("enter number here"));
// //         this.y = Number(prompt("enter number here"));
// //     },

// //     sum() {
// //         return this.x + this.y;
// //     },

// //     mul() {
// //         return this.x * this.y;
// //     },
// // }

// // console.log(calculator);
// // calculator.read();
// // alert(calculator.sum());
// // alert(calculator.mul());

// ////////////////////////////////////////////////////////////



// // function Calculator() {
// //     this.read = function () {
// //         this.x = Number(prompt("enter number here"));
// //         this.y = Number(prompt("enter number here"));
// //     }
// //         this.sum = function () {
// //             return this.x + this.y;
// //         }

// //         this.mul = function () {
// //             return this.x * this.y;
// //         }
// //     }



// // let calculator = new Calculator()
// // calculator.read();

// // alert("Sum = " + calculator.sum());
// // alert("Mul = " + calculator.mul());


// function Accumulator(startingValue) {
//     this.value = startingValue;

//     this.read = function () {
//         this.value += Number(prompt('enter value'));
//     }
// }

// // let accumulator = new Accumulator(1);
// // accumulator.read();
// // accumulator.read();
// // accumulator.read();
// // accumulator.read();
// // accumulator.read();
// // alert(accumulator.value);

// let num = 5;

// let single = ' single';
// let double = " double";
// let backticks = ` backticks`;

// console.log('my ' + num + single);
// console.log('my ' + num + double);
// console.log(`my ${num}${double}`);

// // alert('\u00A9');
// console.log('\u00A9');
// console.log('\u{20331}');
// console.log('I \u{1F60D} JS');
// console.log('I\'m good\\\\\\');


// let str = "Hello";
// console.log("String".length);
// console.log(str.charAt(2));
// console.log(str[0]);

// for(let char of str){
//     console.log(char);
// }

// // str[0] = 'h';
// str = 'hello';
// // console.log(str);

// // console.log("uppercase".toUpperCase());
// // console.log("uppercase"[1].toUpperCase());
// // console.log('LOWERCASE'.toLowerCase());

// // str = 'hello from the other side';

// // // console.log(str.indexOf("l"));
// // // console.log(str.lastIndexOf("l"));


// // let target = 'the';
// // let pos = 0;

// // while(true){
// //     let foundPos = str.indexOf(target, pos);
// //     if(foundPos == -1) break;
// //     console.log(`found at ${foundPos}`);
// //     pos = foundPos +1;
// // }

// console.log('2-3'.split('-').join(':'));
// ////////////////////////////////////////////////////////





// // function Accumulator(initialValue) {
// //     this.value = initialValue;

// //     this.read = function () {
// //         this.value += Number(prompt("How much to add?"));
// //     };
// // }

// // let accumulator = new Accumulator(1); // initial value 1
// // accumulator.read(); // adds the user-entered value
// // accumulator.read(); // adds the user-entered value
// // alert(accumulator.value); // shows the sum of these values


// console.log('2-3'.split(''));

// let powerCalc = new Calculator();
// console.log(n);


let n = "12 + 22".split(" ")
console.log(n);
m = Number(n[0])
console.log(m);
p = Number(n[2])
console.log(p);
let sum = m + p;
console.log(n[1]);