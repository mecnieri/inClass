// console.log(wow.style);
// console.log(window.wow);
let myWow = document.getElementById('wow')
// console.log(typeof myWow);
// console.log(myWow.toString());
myWow.style.padding = "20px";
myWow.style.backgroundColor = "red";
// console.log(myWow);

//getElementsby* 



let divs = document.getElementsByTagName('div')
// console.log(divs[1]);
for (let div of divs) {
    // console.log(div.innerHTML);
}

let menus = document.getElementsByClassName('menus')
// console.log(menus);

for (let menu of menus) {
    // console.log(menu);
}

let ps = document.getElementsByName('p1')
// console.log(ps.keys());
for (let key of ps.entries()) {
    // console.log(key);
}

// querySelector | querySelectorAll

let elements = document.querySelectorAll("ul.menu > li:last-child")
// console.log(elements);
elements.forEach(el => {
    el.style.backgroundColor = 'red';
    el.style.padding = '10px'
    el.style.color = '#fff'
    el.style.fontWeight = '900'
    // console.log(el);
})

let elemen = document.querySelector("ul:last-child")
// console.log(elemen);
// console.log(liveCol.length);

console.log(document.body.constructor.name);
console.log(document.body instanceof HTMLBodyElement);
console.log(document.body instanceof HTMLElement);
console.log(document.body instanceof Element);
console.log(document.body instanceof Node);
console.log(document.body instanceof EventTarget);

 username.addEventLisenet('input', ({target})=>{
     result.textContent = target.value;
 })