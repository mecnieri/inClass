// // console.log(wow);
// // console.log(window.wow);

// let myWow = document.getElementById("wow");
// wow.style.padding = '20px';
// wow.style.backgroundColor = "red";
// wow.style.marginBottom = "10px";
// // console.log(wow);


// let ps = document.getElementsByName("p")
// // console.log(ps)

// for (let key of ps.entries()){
//     // console.log(key);
// }

// let elements = document.querySelectorAll("ul li:last-child")
// // console.log(elements);
// elements.forEach( (el) => {
//     el.style.backgroundColor = 'red';
// } )

// // console.log(username.value);
// username.addEventListener("input", ({target}) => {
//     result.textContent = target.value
// })


// let today = new Date();

// let s = today.getSeconds();
// let m = today.getMinutes();
// let h = today.getHours();
// let dd = today.getDate();


// let dro = s + ' seconds    ' + m + ' mint ' + h + '/' + dd + '/';
// // document.getElementById('saati').innerHTML(dro);

// username.addEventListener("input", ({target}) => {
//         result.textContent = dro;
//     })



// function time() {
//     let d = new Date();
//     let s = d.getSeconds();
//     let m = d.getMinutes();
//     let h = d.getHours();
//     span.textContent = h + ":" + m + ":" + s;
// }


// let span = document.getElementById('span');

// let mylet = setInterval(myTimer, 1000);

// function myTimer() {
//     let d = new Date();
//     let t = d.toLocaleTimeString();
//     document.getElementById("span").innerHTML = t;
// }

// // setInterval(time, 1000);
// function myStopFunction() {
//     clearInterval(mylet);
// }  


// console.log(wow);
// console.log(window.wow);

// let myWow = document.getElementById('wow');
// // console.log(myWow);
// // console.log(typeof myWow);
// // console.log(myWow.toString());
// // console.log(myWow.style);
// myWow.style.padding = "20px";
// myWow.style.backgroundColor = "red";
// myWow.style.fontSize = '18px';
// myWow.style.color = '#fff';
// myWow.hidden = true;



//getElementsBy*

let divs = document.getElementsByTagName('div');
// console.log(divs);
// console.log(divs.wow);

for( let div of divs ){
   // console.log(div)
}

let menus = document.getElementsByClassName('menu');
// console.log(menus);

for( let menu of menus ){
   // console.log(menus)
}

let ps = document.getElementsByName('p');
// console.log(ps);
// console.log(ps.keys());
// for(let key of ps.entries()) {
//     console.log(key)
// }
for(let key of ps.values()) {
   // console.log(key)
}


// let elements = document.querySelectorAll("ul.menu > li:last-child");
// // console.log(elements)
// elements.forEach(el => {
//    el.style.backgroundColor = 'red';
//    el.style.padding = '10px';
//    el.style.color = '#fff';
//    el.style.fontweight = '900';
//    // console.log(el);
// })

let element = document.querySelector("ul:last-of-type");
// console.log(element);

// console.log(document.body.constructor.name);

// console.log(document.body instanceof HTMLBodyElement);
// console.log(document.body instanceof HTMLElement);
// console.log(document.body instanceof Element);
// console.log(document.body instanceof Node);
// console.log(document.body instanceof EventTarget);

// console.log(wow.innerText);
// console.log(wow.TextContent);

document.body.info = {
   name: "body info",
   title: "HTML5",
}

Element.prototype.whoAmI = function(){
   // console.log(`I am - <${this.tagName.toLowerCase()}>tag`);
}
document.body.whoAmI()
// console.log(document.body.info);


// element.hasAttribute(name);
// element.getAttribute(name);
// element.setAttribute(name, value);
// element.removeAttribute(name)

// myWow.setAttribute('class','wow_class');
// console.log(myWow.hasAttribute('class'));
// console.log(myWow.getAttribute('id'));
// console.log(myWow);
// myWow.removeAttribute('class');
// console.log(myWow);

// console.log(myWow.attributes)
// for (let attr of myWow.attributes){
//    console.log(attr.name, attr.value)
// }


