
// window.onload 
// DOMContentLoaded

/*

*/

// function init() {
//     alert('DOMContentLoaded');
//     let box = document.querySelector('.box');
//     box.style.backgroundColor = 'red';
// }

// document.addEventListener('DOMContentLoaded', init);

// window.onload = function () {
//     alert('window.onload');
// }


// hoisted 
// function name() {

//     not hoisted 
//     let name = function () {        
//     }
// }

//zemotac idzaxebs cvlads 

// getName();
// function getName() {
//     alert("Name")
// }


// // zemot ver idzaxebds cvlads

// let getNameV2 = function () {
//     alert("NameV2")
// }
// getNameV2();


// function showMessage(from, text) {
//     from = `*${from}*`
//     alert(`${from}:${text}`)
// }

// let from = 'John';
// showMessage(from, 'Hello');

// alert(from); // => john

// function sum(x, y) {
//     return x + y;
// }

// let result = sum(5, 8);
// console.log(result); 


// function checkMovie(age) {
//     if (age < 18) return;
//     alert(" Access Granted ...")

// }

// checkMovie(13);

// function nothing() {
//     //empty
// }


//#region 


//#endregion 
// let b = 0;
// let x = Number(prompt("x"))
// for (let k = 0; k < x; k++) {
//     if (isPrime(k) == true) {
//         b++;
//     }
//     function isPrime(num) {
//         for (let i = 2; i < num; i++)
//             if (num % i === 0) return false;
//         return num !== 1;

//     }
//     console.log(b)
// }
// alert(isPrime(81));


// function ask(question, yes, no) {
//     if (confirm(question)) {
//         yes()
//     }
//     else {
//         no()
//     }
// }

// function showOkay() {
//     alert("you agreed...");

// }

// function showCancel() {
//     alert("you canceled...")

// }

// ask("do you agree ? ", showOkay, showCancel);

// //(arg1, arg2, arg3, ... argN) => {}
// // function (arg1, arg2, arg3, ... argN) => {}

// function sq(n) {
//     return n *2;
    
// }

// let sq2 = function () {
//     return n *2 
    
// }


a = Number(prompt("insert first number here"));
y = Number(prompt("insert last number here"));

let b = 0;
let c = 0;
for (let x = a; x < y + 1; x++) {

    for (let i = 0; i < x + 1; i++) {

        if (x % i == 0) {
            b++;
        }
    }
    if (b == 2) {
        c++;
        console.log(x + " is prime number");
        document.write(x + " is prime number <br>");
    }
    b = 0;
}

console.log("total " + c + " numbers");
document.write("total " + c + " numbers");
