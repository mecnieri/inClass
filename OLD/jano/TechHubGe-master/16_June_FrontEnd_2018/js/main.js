//#region if

// let num = prompt("Enter a number");
// ==, ===, !=, !==, >, <, <=, >= 
// &&, ||, !
// if ( num % 2 === 0 ) {
//     alert("Even");
//     alert("Have fun");
// }
// else {
//     alert("odd");
// }


/*  
    if(piroba){ // moqmedeba }
*/

//#endregion if
//#region wrong
// let x;
// if( x = 5 ) {
    // alert("false")
    // x...
// }

//#endregion wrong
//#region ternary

// let accessAllowed;
// let age = prompt("age");
// if( age > 18) {
//     accessAllowed = true;
// }
// else {
//     accessAllowed = false;
// }

// alert(accessAllowed);

// let result = condition ? value_1 : value_2;
// accessAllowed = ( age > 18 ) ? true : false; 
// accessAllowed = age > 18;

//#endregion ternary
//#region logical OR
// XOR a ^ b 
// let hour = 10;

// if ( hour < 11 || hour > 18 ) {
//     alert("closed");
// }

// true || false
// if( 1 || 0) {
//     alert("truthy");
// }

// alert(true || 'the string');
// alert(null || 1);
// alert(null || 0 || 1);
// alert(undefined || null || 0)

//#endregion logical OR
//#region logical AND

// let hour  = 11;
// let minute = 44;

// if ( hour == 11 && minute == 44) {
//     alert("Time is 11:44");
// }

// if( 1 && 0 ) {
//     alert("won't work");
// }

// alert(1 && 0);
// alert(1 && 5);

// alert(null && 5);
// alert(0 && "string");

// alert(5 || 7 && 0);
//#endregion logical AND
//#region logical NOT
    // alert(!true);
    // alert(!0);

    // alert(!5 || 1);
    // alert(!(5 || 1))
//#endregion logical NOT
//#region EX_9_Leap

// let year = Number( prompt("Enter a year") );

// if(  year % 4 == 0 && ( !(year % 100 == 0) || year % 400 == 0 )) {
//     alert("this is a leap year");
// }
// else {
//     alert("this is not a leap year");
// }

//#endregion EX_9_Leap
//#region switch
// let a = 3;
// switch(a){
//     default:
//         alert("default");
//     break;

//     case 3:
//         alert("a = 3");
//     break;

//     case 4:
//         alert("a = 4");
//     break;

//     case 5:
//         alert("a = 5");
//     break
// }
// browser == "Chrome" || "Firefox" || "Safari" || "Opera"

// if( browser == "Edge") {
//     alert("You've got the Edge!");
// }
// else if ( browser == "Chrome" || browser == "Firefox"
//     || browser == "Safari" || browser == "Opera" ){
//     alert('Okay we support these browsers too');
// }
// else {
//     alert("Internet Explorer")
// }

//#endregion switch
//#region while

// while( condition ){

// }

// let i = 0;
// while ( i < 10 ){
//     document.writeln(i);
//     i++;
// }
// document.write('<br>');
// while( i ) {
//     document.writeln(i);
//     i--;    
// }

// while( i < 3) 
// {
// alert(i++);
// }

//#endregion while
//#region do_while
let i = 0;
    do {
        // alert(i);
        i++;
    } while( i > 4 );
//#endregion do_while
//#region EX_13
// let num = Number( prompt("Enter a number")  );

// let sum = 0;
// while(  num > 0 ){
//     sum += num % 10;
//     debugger;
//     num = parseInt( num / 10 );
// }
// alert(`Sum of digits is ${sum}`);   
//#endregion
//#region for
// for( begin; condition; step ){
 // code
// }

for(let i = 0; i < 10; i++){
    if( i == 5) continue;
    alert(i);
}
// () => {}
// (x) => {return x **2 }
// x => x**2;
//#endregion for


