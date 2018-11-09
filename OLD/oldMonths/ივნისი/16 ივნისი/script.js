// let num = prompt("enter a number");

// // ==, ===, !=, !==, > 
// // &&, ||, !
// if(num % 2 == 0) {
//     alert("even")
// } 
// else{
//     alert("odd")
// }
// #region sa
// //  if(piroba) {//moqmedeba}

// let x;

// if(!0){ 
//     alert("true")
//     //x...
// }


// let accessAllowed;
// let age = prompt("age");

// if (age>18 ){
//     accessAllowed = true;
// }

// else{
//     accessAllowed =false;
// }

// alert(accessAllowed);

// //let result = condition ? value_1 : value_2

// accessAllowed = (age > 18) ? true : false ;
// #endregion

// let whosThere = prompt("who's there?");
// if (whosThere == "admin") {
//     password = prompt("password?");
// }

// else if (whosThere == null || whosThere == "") {
//     alert("Canceled!");
// }

// else {
//     alert("I dont know you")
// }

// if (password == "TheMaster") {
//     alert("Welcome")
// }
// else if (password == "" || password == null) {
//     alert("Canceled")
// }
// else {
//     alert("Wrong password")
// }

// region logical
// let hour = 15;
// if (hour < 11 || hour > 18) {
//     alert("closed");

// }

// if (1||0){
//     alert("truthy");
// }

// alert(true || "the string");
// alert(null || 1);
// alert(null || 0);
// alert(undefined || null || 0);

//#endregion logical

//#region logical and 


// let hour = 11; 
// let minute = 44;
// if(hour == 11 && minute == 44){
//     alert("time is 11:44")
// }

// if(1 && 0){
//     alert("wont work");
// }

// alert(1 && 0);
// alert(1 && 5);
// alert(null && 5);
// alert(0 && "string");

// alert(5 || 7 && 0);



//#endregion logical
//#region logic
// let year;
// year = prompt("Enter the year");
// if ((year % 4 == 0 &&  year % 100 != 0) || year % 400 == 0 ) {
//     alert("Year is leap")
// }
// else{
//     alert("this is not leap")
// }
//#endregion


// #region switch

// a = 3;

// switch (a) {
//     case 3:
//         alert(a + 4 );
//         break;
//     case 4:
//         alert("otxi");
//         break;

//     case 5:
//         alert("xuti");
//         break;
//     case 9:
//         alert("cxra");
//         break;

//     default:
//         alert("default");
//         break;
// }

// #endregion switch


// let browser = prompt("what is your browser?");
// if (browser == "edge") {
//     alert("You've got the Edge!")
// }

// else if (browser == "chrome" || browser == "firefox" || browser == "safari" || browser == "opera") {
//     alert("Okay we support these browsers too!");
// }

// else {
// alert("We hope that this page looks ok!")
// }

//#region calc

// let number1 = Number(prompt("what is number 1?"));
// let number2 = Number(prompt("what is number 2?")); 
// let operation = prompt("what is number operation?");

// if(operation == "+"){
//     alert( number1 + number2)
// }
// else if(operation=="-"){
//     alert( number1 - number2)
// }
// else if(operation=="*"){
//     alert( number1 * number2)
// }
// else if(operation=="/"){
//     alert( number1 / number2)
// }
// else {
//     alert("sxva rame")
// }


//#endregion calc


//#region while

// while (condition) {

// }


// while (i < 10) {
//     i++;


// // }

// while (i < 3) {
//     document.writeln(i)
// }






//#endregion while

//#region do_while
//


// let i = 0
// do {
//     alert(i);
//     i++;
// } while (i < 5)

//#endregion do_while


// number = Number(prompt("please enter number"));

// while (isNaN(Number)){
// alert("yes")
// prompt("try again")
// }


// let number = Number(prompt("please enter number"));
// let sum = 0;
// while (number > 0) {
//     sum += number % 10;
//     number = parseInt(number / 10);
// }
// alert(`Sum is ${sum}`);


// for (let index = 0; index < array.length; index++) {
//     const element = array[index];

// }
//  number1 = Number(prompt("please enter min number"));
//  number2 = Number(prompt("please enter max number") m);

// for (let i = number1; i < number2; i++) {
//     if (i % 2 !==0 ) continue ;
//     document.writeln(i);

// }

// number = Number(prompt("please enter min number"));

// for (let i = 0; i < number; i++) {
//     for (let i = 0; i < number; i++) {
//         document.write("*");
//     }
//     document.write('<br>');
// }

