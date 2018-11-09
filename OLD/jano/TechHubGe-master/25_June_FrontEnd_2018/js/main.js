// function Car(name, color, brand){
//     this.name = name;
//     this.color = color;
//     this.brand = brand;
// }

// let car = new Car('name', 'color', 'brand');

function Car() {
    this.name = '';
    this.color =  '';
    this.brand =  '';

    this.setColor = function(color){
        this.color = color;
        return this;
    }

    this.setName = function(name){
        this.name = name;
        return this;
    }

    this.setBrand = function(brand){
        this.brand = brand;
        return this;
    }

    this.save = function(){
        console.log(`${this.name} ${this.color} and ${this.brand}`)
        return this;
    }
}

// let car = new Car()
//         .setBrand('brand')
//         .setColor('color')
//         .setName('name')
//         .save();

// let car = new Car...
// console.log(car.name);
// console.log(car.color);
// console.log(car.brand);

let str = "my string example";

// console.log(str.includes('my'))

// console.log(str.startsWith('my'))
// console.log(str.endsWith('example'))

// let arr = [1,2,3];
// let clone = arr.slice();

// console.log(clone === arr)

// let sliced = str.slice(0, 3);
// console.log(`sliced - ${sliced.trim()}`);

// let subString = str.substring(0, 6);
// console.log(`substring - ${subString}`)

// let subStr = str.substr(0, 3);
// console.log(`subStr - ${subStr}`)

/*
DOCUMENT_NODE - window.document/document
ELEMENT_NOE - <body> <a> <p> ....
ATTRIBUTE_NODE - class="ohoo"
TEXT_NODE - ნებისმიერი დაშორება ფაილში.
DOCUMENT_TYPE_NODE - <!Doctype html>
DOCUMENT_FRAGMENT_NODE - document.createDocumentFragment()
*/

// console.log(Node.ELEMENT_NODE);
// console.log(Node.ATTRIBUTE_NODE);
// console.log(Node.TEXT_NODE);

// Oject > Node > Element > HTML*Element

// HTMLAnchorElement
let nodeAnchor = document.querySelector('a');
let props = [];

for( let key in nodeAnchor ) {
    props.push(key);
}

// console.log(props.sort())

/*

Node Properties:
    
    childNodes
    firstChild
    lastChild
    nextSibling
    previousSibling
    nodeName
    nodeType
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
    documnt.createTextNode('string')

HTML*Element Properties:
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

// *******DOM ELEMENT SELECTION*******

// document.querySelector('css selector!!!!')
// document.querySelectorAll('css selector!!!!');

// document.getElementById();

// let menuItem = document.getElementById('menu');
// console.log(menuItem) 

let menus = document.getElementsByClassName('menu');
let menus2 = document.querySelectorAll('.menu');
let menusArray = Array.from(menus2);
// console.log(menus)
// console.log(menus2)
// console.log(menusArray);

let menuItem = document.querySelector('a');
console.log(menuItem.matches('#menu'));



