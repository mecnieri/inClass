// el.nodeType
// el.nodeName


// window.alert()
// window.prompt()
// window.confirm()
// let x = 9; 
// // console.log(x);

// console.log(window.x);



// // console.log(window.innerHeight);
// // console.log(window.innerWidth);

// // BOM - Browser Object model
// // BOM - Document Object model

// // console.log(location);





// let div = document.body.firstElementChild;

// let ol = div.nextElementSibling;

// let second = ol.firstElementChild.nextElementSibling;
// console.log(div, ol, second);

let container = document.body.firstElementChild;
let children = container.children;

for (let i = 2; i < container.children.length; i += 6) {
    children[i].style.backgroundColor = "green";
    children[i].nextElementSibling.style.backgroundColor = "green";
}


for (let i = 12; i < 24; i++) {
    children[i].style.backgroundColor = "red";
}

children[14].style.backgroundColor = "green";
children[21].style.backgroundColor = "green";