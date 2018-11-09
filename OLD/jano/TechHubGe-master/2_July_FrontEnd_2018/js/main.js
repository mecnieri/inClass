let a = document.querySelector('a');

// console.log(a.constructor.name)

// console.log(a.tagName)

let textarea = document.createElement('textarea');
// data-*
document.body.appendChild(textarea);

let br = document.createElement('br');
document.body.insertBefore(br, textarea);

// console.log(a.attributes);
let atts = Array.from(a.attributes);

atts.forEach((attr) => {
    // console.log(`${attr.nodeName}=${attr.nodeValue}`)
})

textarea.setAttribute('rows', 10);
textarea.setAttribute('cols', 50);
textarea.style.resize = 'none'
// display: block | none
// .hide, .show
// console.log(textarea.getAttribute('style'))

// className, classList

// console.log(a.className)
// a.className += ' a-style';
// console.log(a.classList)

// console.log(a.classList.item(0))
// a.classList.add('a-style')

// let count = 0;
// console.log(a.classList.contains('a-style'))
// console.log(a.dataset.cartId);
a.dataset.count = 0;

a.addEventListener('click', (event) => {
    let count = parseInt(event.target.dataset.count);
    if( count < 4 ) {
        event.preventDefault();
        event.target.dataset.count = count + 1;
    }
    
    a.classList.toggle('a-style')
})


// textarea.removeAttribute('rows')
// textarea.removeAttribute('cols')


// console.log(textarea.hasAttribute('rows'))

let input = document.querySelector('#name');

// console.log(input.value)
// input.value = ""
// {target}
// funciton( arg1, arg2, arg3, ...N)
let object = { name: "Oho Name", age: 80}

// let {name, age} = object;
// console.log(name, age)

// let {name:x, age:y} = object;
// console.log(x, y);

let deepObject = { 
    innerObject: { 
        deep:"Deep Property", 
        wow: true,
        } 
    }
let {innerObject: {deep:myDeep, wow:myWow }  } = deepObject;

// console.log(myDeep, myWow)

let {no} =  object;

// console.log(no)

let num1 = 7, num2 = 13;

[num1, num2] = [num2, num1];

// console.log(num1)

let key = 'name';

let { [key]: myName } = object;

// console.log(myName)

// let {def=8}= {def:undefined};
// console.log(def)

// let [,,k,l]= [1,2,3,4,5];

// console.log(k,l);


function greet({age, name:greeting="Person"}){
    console.log(`${greeting} is ${age} years old`);
}

greet({name:"John", age:22});
greet({age:22});

function getCoords(){
    return {
        x: 43,
        y: 41
    }
}

let {x, y} = getCoords();

console.log(x, y)