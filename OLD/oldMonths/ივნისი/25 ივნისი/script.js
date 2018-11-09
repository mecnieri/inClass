//#region დავალება 8 


// function Calculator() {
//     this.calculate = function (str) {

//         if (str.split(" ")[1] == "+") {
//             return Number(str.split(" ")[0]) + Number(str.split(" ")[2]);
//         }
//         else if (str.split(" ")[1] == "-") {
//             return Number(str.split(" ")[0]) - Number(str.split(" ")[2]);
//         }
//     }
// }


// let calc = new Calculator();
// console.log(calc.calculate("7 + 6"));





//#endregion 

//#region მანქანის დავალება, ცუდი ვარიანტი
// function Car(name, color, brand) {
//     this.name = name;
//     this.color = color;
//     this.brand = brand;
// }

// let car = new Car('name', 'color', 'brand');

// console.log(car.name);
// console.log(car.color);
// console.log(car.brand);

//#endregion 

//#region მანქანის დავალება, ჯანოს ვარიანტი


// function Car(){
//     this.name = "";
//     this.color = "";
//     this.brand = "";
//     this.setColor = function(color){
//         this.color = color;
//         return this;
//     }
//     this.setName = function(name){
//         this.name = name;
//         return this;
//     }
//     this.setBrand = function(brand){
//         this.brand = brand;
//         return this;
//     }
//     this.save = function(){
//         console.log(`${this.name} ${this.brand} and ${this.color}`);
//         return this;
//     } 
// }

// let car = new Car().setBrand("BMW").setColor("blue").setName("XX").save();
// console.log(car)
// console.log(car.brand)

//#endregion 

//#region ძებნები 

// let str = "my string examlpe"; 

// // console.log(str.includes('my'))

// console.log(str.startsWith('rign'));
// console.log(str.endsWith('oe')); // მთლიანის ბოლო 


// let arr = [1,2,3];
// let clone = arr.slice();
// console.log(arr === clone);
//#endregion 

//#region ამოჭრები 

// let str = "my string examlpe"; 

// let sliced = str.slice(2,5); // მინუსებიც შეიძლება

// console.log(`sliced ${sliced}`);
// console.log(`sliced ${sliced.trim()}`); //whitespaces აშორებს კიდეებიდან 


// let subString = str.substring(0,6);
// console.log(`subString ${subString}`);


// let subStr = str.substr(4,3) // პირველი და სიგრძე
// console.log(`substr ${subStr}`);


// function checkSpam(str) {
//     if (str.toLowerCase().includes('viagra') || str.toLowerCase().includes('xxx')) {
//         return true;
//     }
//     else {
//         return false;
//     }
// }

// alert(checkSpam('buy Viagra now'));
// alert(checkSpam('free xxxxxx'));
// alert(checkSpam('innocent rabbit'));

//#endregion 

//#region  დავალება 2 

// function truncate(str, maxlength) {

//     if (str.length < maxlength) {
//         console.log(str);
//     }
//     else {
//         return  str.substr(0, maxlength - 1) + "..." ;

//     }

// }


// alert(truncate("What I'd like to tell on this topic is:", 20))



//#endregion 


/*

DOCUMENT_NODE - windown.document/document
ELEMENT_NODE - <body> <a> <p> ...
ATTRIBUTE_NODE - class="ohooo"
TEXT_NODE - ნებისმიერი დაშორება ფაილში.
DOCUMENT_TYPE_NODE - <!document html>
DOCUMENT_FRAGMENT_NODE document.createDocumentFragment()

*/


// console.log(Node.DOCUMENT_POSITION_DISCONNECTED);  
// console.log(Node.ATTRIBUTE_NODE); 
// console.log(Node.TEXT_NODE);


// Object > Node > Element > HTML*Element 





// let nodeAnchor = document.querySelectorALL('') // ყველას


// let nodeAnchor = document.querySelector('a'); // პირველს 
// let props = [];

// for (let key in nodeAnchor) {
//     props.push(key);
// }


// console.log(props.sort());

/*

Node properties: 
     childNodes 
     firstChild 
     lastCild
     nextSibling
     previousSibling
     nodeName
     nodeValue
     parentNode

Node Methods: 
    appendChild(node)
    cloneNode()
    contains(node)
    hasChildNodes()
    insertBefore(node)
    isEqualNode()
    removeChild(node)
    replaceChild(node)

Document Methods: 
    document.createElement('tag')
    document.createTextNode('string')
    
HTML*Element Properies:
    innerHTML
    outerHTML
    textContent 
    innerText
    outerText
    firstElementChild 
    lastElementChild
    nextElementChild 
    previousElementChild
    children 
*/

let div = document.createElement('div');
let text = document.createTextNode('text node example');

div.appendChild(text);

document.body.appendChild(div);


// ****DOM ELENMT SELECTION***********

// document.querySelector('css selector!!')
// document.querySelectorALL('css selector!!')


// document.getElementById

// let menuItem = document.getElementById('menu');

// console.log(menuItem);

let menus = document.getElementsByClassName('menu');
let menus2 = document.querySelectorAll('.menu')
// console.log(menus);
// console.log(menus2);

let menusArray = Array.from(menus2);

// console.log(menusArray);


let manuItem = document.querySelector('a');
console.log(manuItem.matches('#menu'));
