// element.setAttribute(name, value);
// element.setAttribute(name, value);

// let val = fontSize.value;
// console.log(val);



let color;

console.log(color);
document.getElementById("div1").addEventListener("click", function myFunction() {
    color = "red";
    console.log(color);
})
document.getElementById("div2").addEventListener("click", function myFunction() {
    color = "yellow";
    console.log(color);
})
document.getElementById("div3").addEventListener("click", function myFunction() {
    color = "green";
    console.log(color);
})

document.getElementById("createColor").addEventListener("click", function myFunction() {
    var x = document.getElementById("div4");
    x.setAttribute("style", "background-color:" + color);

})