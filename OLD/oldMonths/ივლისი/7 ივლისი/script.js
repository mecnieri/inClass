// let User = {
//     name: "Gela",
//     age: 13,
//     isPupil: true,
//     printInfo: function () {
//         console.log(`${this.name}, ${this.age},${this.isPupil}`);

//     }
// }

// User.printInfo();


// window.onload
// window.onload = () => {
//     init();

// აქ ყველაფერი
// }

// function init() {
//     func()
//     func()
//     func()
//     func()
// }
// fun1

// document.addEventListener('DOMContentLoaded', (event) => {
//     //  აქ მხოლოდ ჰტმლ და ცსს

//     let pirveli  = document.getElementsByTagName('h1')[0];
//     console.log(pirveli);
//     pirveli.innerHTML = "Hello from JS";
//     pirveli.style.color = "red";
//     pirveli.style.padding = "10px";
// })


document.addEventListener('DOMContentLoaded', (event) => {

    let a = document.getElementById('box1').style.background = "red";
    let b = document.getElementById('box2').style.background = "green";
    let c = document.getElementById('box3').style.background = "blue";
    let d = document.getElementById('box4').style.background = "brown";
    let e = document.getElementById('box5').style.background = "yellow";
    let f = document.getElementById('box6').style.background = "plum";
    let g = document.getElementById('box7').style.background = "tomato";
    let h = document.getElementById('box8').style.background = "black";
    let i = document.getElementById('box9').style.background = "gray";

    document.getElementById("addDaybutton").addEventListener("click", function () {
        console.log(a);
        document.getElementById('resultBox1').style.background = a;
        document.getElementById('resultBox2').style.background = e;
        document.getElementById('resultBox3').style.background = b;

    }
    )
})

elementNode.setAttribute("onclick", "selectFunc(this, Number(prompt('Please, enter number here')))");


 
function myFunction() {
    document.getElementById("").setAttribute("class", "democlass"); 
}
 
























// setTimeout, 

// setInterval


// function greet() {
//     alert("setTimeout()")
// }

// setTimeout(greet, 1000)


// function printNumbers(from, to) {
//     setInterval(function () {
//         alert(from);
//         from++;
//     }, 1000);

//     clearInterval(from == to);
// }



// printNumbers(1, 3)

// // CLOSURE
