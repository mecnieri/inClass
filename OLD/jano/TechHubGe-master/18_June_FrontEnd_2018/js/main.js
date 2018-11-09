

// window.onload
// DOMContentLoaded


function init(){
    alert('DOMContentLoaded');
    let box = document.querySelector('.box');
    box.style.backgroundColor = 'red';

    // IIFE
    // x = 8
    // ( function(x) {
    //     alert(x);
    // } )(8);

}

document.addEventListener('DOMContentLoaded', init);
// window.onload = function(){
//     alert('window.onload');
// }

/*
hoisted
function name(){}

not hoisted
let name = function(){}
*/

// getName();
function getName(){
    alert("Name");
}

let getNameV2 = function(){
    alert("NameV2");
}
// getNameV2();

function showMessage(from, text, text2){
    // let from = from;
    from = `* ${from} *`;
    alert(`${from}: ${text}`);
}

let from = 'John';
// showMessage(from, 'Hello');

// alert(from); // => John

function sum(x, y){
    return x + y;
}

let result = sum(5, 8);

function checkMovie(age){
    if ( age < 18 ) return;

    alert("Access Granted!...");
}

function nothing(){ /* Empty */ }
checkMovie(17);
console.log(result);
console.log(nothing() === undefined );

function ask(question, yes, no){
    if( confirm(question) ) {
        yes()
    }
    else {
        no();
    }
}


function showOkay(){
    alert("You agreed.");
}

function showCancel(){
    alert("You Canceled...");
}
// ask("Do you agree?", showOkay, showCancel);
ask(
    "Do you agree?", 
    function() { alert("You agreed."); },
    function() { alert("You Canceled..."); }
)

// function f(arg1,arg2,arg3, ...argN) {}
// let f = (arg1,arg2,arg3, ...argN) => {}
// this

function sq(n){
    return n * 2;
}
let sq2 = function(){
    return n * 2;
}
let sq3 = (n, k) => (n ** k) * 2;


let say = () => alert("message");

say();

ask(
    "Do you agree?", 
    () =>  alert("You agreed."),
    () => alert("You Canceled...")
)
