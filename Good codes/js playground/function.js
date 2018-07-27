
// function getName(){
//     alert("Name");
// }

// let getNameV2 = function(){
//     alert("NameV2");
// }
// // getNameV2();




// function sum(x, y) {
//     return x + y;
// }

// let result = sum(5, 8);

// function checkMovie(age) {
//     if (age < 18) return;  //return წყვეტს ბლოკს

//     alert("Access Granted!...");
// }
// function nothing() { /* Empty */ }
// checkMovie(17);
// console.log(result);
// console.log(nothing() === undefined);


// function ask(question, yes, no) {
//     if (confirm(question)) {
//         yes()
//     }
//     else {
//         no();
//     }

// }

// გრძლად 
// function showOkay(){
//     alert("You agreed.");
// }

// function showCancel(){
//     alert("You Canceled...");
// }
// ask("Do you agree?", showOkay, showCancel);


// მოკლედ
// ask(
//     "Do you agree?",
//     () => alert("You agreed."),
//     () => alert("You Canceled..."),
// )



// let say = () => alert("arrow function ");

// say();

//  console.log(typeof(say));



function sq(n){
    return n * 2;
}


let sq2 = function(n){
    return n * 2;
}


let sq3 = (n, k) => (n ** k) * 2;


// console.log(sq3(2,4));