// // function defaultParams(x = 13 , y = 2) {
// //     return x * y;
// // }

// // console.log(defaultParams());




// // grantAccess(
// //     alert("Access granted");
// // )

// // denyAccess
// // ////////////////////////


// // function checkAge(age, granted, denied) {
// //     if (age < 18) denied();
// //     else granted();
// // }

// // let age = prompt("What is your age ?", 18);

// // checkAge(age, granted, denied) 
// //  (   "What is your age ?", 18,
// //     () => { alert("Access granted") },
// //     () => { alert("Access denied") },
// // )



// // let years = new Array(10);
// // let years2 = [10];

// // console.log(years.length);
// // years.length =5;


// // console.log(years.length);
// // console.log("_________");
// // console.log(years2.length);


// //console.log(years2.length);





// // let fruits = ["Apple", "Banana", "Cherry",];
// // console.log(fruits);
// // console.log(fruits[0]);
// // console.log(fruits[1]);
// // console.log(fruits[2]);
// // console.log(fruits[3]);

// // fruits[2] = "Lemon";
// // console.log(fruits);
// // console.log(fruits[0]);
// // console.log(fruits[1]);
// // console.log(fruits[2]);
// // console.log(fruits[3]);

// // let arr = ["Apple", {name:"John"}, true, ()=> {alert("Hello from array")}];
// // console.log(arr);
// // console.log(arr[0]);
// // console.log(arr[1]);
// // console.log(arr[1].name);
// // console.log(arr[2]);
// // console.log(arr[3]);
// // // arr[3]();
// let numbers = [];

// // // push / pop



// // console.log(numbers);
// // // lifo
// // let removed = numbers.pop();

// // console.log(`removed:${removed}`);
// // console.log(numbers);
// // numbers.length = 0;
// // console.log(numbers);

// // // fifo
// // // shift/unshift

// // numbers.unshift(1);
// // numbers.unshift(3);
// // numbers.unshift(8);
// // numbers.unshift(13);
// // console.log(numbers);

// // removed = numbers.shift()
// // console.log(`removed: ${removed}`);
// // console.log(numbers);

// let n = numbers;

// numbers.push(1)
// numbers.push(3)
// numbers.push(8)
// numbers.push(13)
// numbers.push(51)

// // console.log(n);

// n.push(33);
// // console.log(numbers);

// // let clone = Object.assign({}, numbers);
// // console.log(clone);

// let clone = numbers.slice();
// clone.push(64)
// // console.log(numbers);
// // console.log(clone);


// clone.age = 11;
// // console.log(clone['age']);

// // numbers[index]
// for (let index = 0; index < numbers.length; index += 1) {
//     // console.log(numbers[index]);
// }

// for (number of numbers) {
//     // console.log(number);
// }

// for (number in numbers) {
//     // console.log(numbers[number]);
// }

// // console.log(numbers.toString());
// // console.log(numbers.join("-"));
// // console.log(numbers);

// let matrix = [
//     [1, 2, 3],
//     [4, 5, 6],
//     [7, 8, 9],
// ]

// // console.log(matrix[0][1]);




// let a = [];
// let x = Number(prompt("enter number here"));


// do {
//     let x = Number(prompt("enter number here"));
//     a.push(x)
// }
// while (x < 100);




// console.log(a);
// document.write(a);


// let x = Number(prompt("enter number here"));
// let a = [];

// do {
//     a.push(x)
//     x = Number(prompt("enter number here"));
// } 
// while (x == "");


//  console.log(a);


//#region davaleba


// Write the function sumInput() that:

// Asks the user for values using prompt and stores the values in the array.
// Finishes asking when the user enters a non-numeric value, an empty string, or presses “Cancel”.
// Calculates and returns the sum of array items.
// P.S. A zero 0 is a valid number, please don’t stop the input on zero.

//#endregion 


//DOM 
// console.log(document);
// console.log(document.documentElement);
// console.log(document.body);
// console.log(document.head);

// childNodes, firstChild, lastChild

// console.log(document.body.childNodes);
// console.log(document.body.firstChild);


// for (let index = 0; index < document.body.childNodes.length; index++) {
// console.log(document.body.childNodes[index]);    
// }


let a = [];

do {
    x = prompt("enter number here");
    a.push(Number(x));
} while (x != "" && x != null);

let sum = 0;
for (let index = 0; index < a.length; index++) {

    sum = sum + a[index];

}

console.log(a);
document.writeln(a);

console.log(sum);
document.writeln(sum);
