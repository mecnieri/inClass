let a = document.querySelector('a');


// console.log(a.constructor.name);


// console.log(a.tagName);

let textarea = document.createElement('textarea');
// data-* 
document.body.appendChild(textarea);

let br = document.createElement('br');
document.body.insertBefore(br, textarea);

// console.log(a.attributes);

let atts = Array.from(a.attributes);

atts.forEach((attr) => {
    // console.log(attr);
    // console.log(attr.nodeName);
    // console.log(`${attr.nodeName} = ${attr.nodeValue}`);
});


textarea.setAttribute('rows', 10);
textarea.setAttribute('cols', 50);
textarea.style.resize = 'none';

//display: block | none
// .hide .show

// console.log(textarea.getAttribute('style'));

//className, classList

// console.log(a.className);

// a.className = 'a-style'; //გადაეწერება
a.className += ' a-style';  // დაემატება

a.classList.add("a-style")

a.dataset.count = 0;
// console.log(a.classList/);

a.addEventListener('click', (event) => {
    let count = parseInt(event.target.dataset.count);
    if (count <= 4) {
        event.preventDefault();
        event.target.dataset.count = count + 1;
    }
    a.classList.toggle('a-style')
}
)

// textarea.removeAttribute("rows");
// textarea.removeAttribute("cols");


// textarea.removeAttribute

let input = document.querySelector('#name')

// console.log(input.value);

// input.value = "fdsaasda"

// console.log(input.value);


// let object = {
//     name: "oho Name",
//     age: 80
// }

// console.log(object);

// // let {name, age} = object;

// // console.log(name, age);

// let { name: x, age: y } = object;

// console.log(x, y);

let object = {
    name: "oho Name",
    age: 80
}

console.log(object);

let { name, age } = object;

console.log(name, age);

let { name: x, age: y } = object;

console.log(x, y);


let deepObject = {
    innerObject: {
        deep: "Deep property",
        wow: true
    }
}
console.log(deepObject);

let { innerObject: { deep: myDeep, wow: myWow } } = deepObject;

console.log(myDeep, myWow);
console.log(deepObject);


let { no } = object;

console.log(no);

let num1 = 7, num2 = 13;

[num1, num2] = [num2, num1]

console.log(num1);
console.log(num2);


let key = 'name';

let { [key]: myName } = object;

console.log(myName);

let { def = 8 } = { def: undefined };

console.log(def);

let [, , , k, l] = [1, 2, 3, 4, 5];

console.log(k, l);

function greet({ age, name: greeting = "she" }) {
    console.log(`${greeting} is ${age} years old`);


}

greet({ name: "John", age: 22 });
// greet({ age: 22 })

function getCoortds() {
    return {
        m: 43,
        n: 41
    }
}

let { m, n } = getCoortds();
console.log(m, n);