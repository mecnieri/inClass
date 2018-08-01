// element.setAttribute(name, value);
// element.setAttribute(name, value);

// let val = fontSize.value;
// console.log(val);




div1.addEventListener("click", function myFunction() {
    color1 = window.getComputedStyle(div1, null).getPropertyValue("background-color");;
})
div2.addEventListener("click", function myFunction() {
    color1 = window.getComputedStyle(div2, null).getPropertyValue("background-color");;
})
div3.addEventListener("click", function myFunction() {
    color1 = window.getComputedStyle(div3, null).getPropertyValue("background-color");
})

createColor.addEventListener("click", function myFunction() {
    div10.setAttribute("style", "background-color:" + color1);
})

div4.addEventListener("click", function myFunction() {
    color2 = window.getComputedStyle(div4, null).getPropertyValue("background-color");
})
div5.addEventListener("click", function myFunction() {
    color2 = window.getComputedStyle(div5, null).getPropertyValue("background-color");
})
div6.addEventListener("click", function myFunction() {
    color2 = window.getComputedStyle(div6, null).getPropertyValue("background-color");;
})

createColor.addEventListener("click", function myFunction() {
    div11.setAttribute("style", "background-color:" + color2);
})

div7.addEventListener("click", function myFunction() {
    color3 = window.getComputedStyle(div7, null).getPropertyValue("background-color");;
})
div8.addEventListener("click", function myFunction() {
    color3 = window.getComputedStyle(div8, null).getPropertyValue("background-color");;
})
div9.addEventListener("click", function myFunction() {
    color3 = window.getComputedStyle(div9, null).getPropertyValue("background-color");;
})

createColor.addEventListener("click", function myFunction() {
    div12.setAttribute("style", "background-color:" + color3);
})