function defaultParams(x = 1, y = 1){
    return x * y;
}

// console.log(defaultParams( x, 5) );

// let years = new Array(10);
// let years2  = [10];

// console.log(years.length);
// years.length = 5;
// console.log(years.length)

// console.log("------------")
// console.log(years2.length);
// years2.length = 17;
// console.log(years2.length)

let fruits = [
            "Apple", 
            "Banana", 
            "Cherry",
            "Lemon",
        ];

// fruits.length - 1
// console.log(fruits)
// console.log(fruits[0])
// console.log(fruits[1])
// console.log(fruits[2])
// fruits[2] = "Lemon";
// console.log(fruits)

// let arr = ['Apple', { name:"John"}, true, () => { alert("Hello from array") }];
// console.log(arr)
// console.log(arr[0]);
// console.log(arr[1].name)
// console.log(arr[2])
// arr[3]();

let numbers = [];
//LIFO
// Push/Pop
numbers.push(1)
numbers.push(3)
numbers.push(8)
numbers.push(13)
// console.log(numbers);
// let removed = numbers.pop();

// console.log(`removed: ${removed}`);
// console.log(numbers);
// numbers.length = 0;
// console.log(numbers)

// FIFO
// Shift/Unshift
// numbers.unshift(1)
// numbers.unshift(3)
// numbers.unshift(8)
// numbers.unshift(13)

// console.log(numbers);
// removed = numbers.shift();
// console.log(`removed: ${removed}`);
// console.log(numbers)

let n = numbers;
//console.log(n);
// console.log(n === numbers)
n.push(33);
//console.log(numbers)
// let clone = Object.assign({}, numbers);

let clone = numbers.slice();
clone.push(64)
//console.log(numbers);
//console.log(clone);


clone.age = 11;
numbers.age = 13;
// console.log(clone);

// numbers[index]
for( let index = 0; index < numbers.length; index += 1){
    // console.log(numbers[index]);
}

for( number of numbers){
    // console.log(number)
    // typeof number === 'function'
}

for( key in numbers){
    // console.log(numbers[number])
}

// console.log(numbers.toString())
// console.log(numbers.join("-"))
// console.log(numbers);

let matrix = [
    [1,2,3],
    [4,5,6],
    [7,8,9],
]

// console.log(matrix[0][1])

// DOM
// DOM Tree
// console.log(document);
// console.log(document.documentElement);

// console.log(document.body);
// console.log(document.head);

// childNodes, firstChild, lastChild
// console.log(document.body.childNodes);
// console.log(document.body.firstChild);
// console.log(document.body.firstElementChild);

for( let i = 0; i < document.body.childNodes.length; i += 1){
    if( document.body.childNodes[i].nodeName.toLocaleLowerCase()  === 'div') {
        // document.body.childNodes[i].textContent = "გამარჯობა"
        // document.body.childNodes[i].innerHTML = "<b>innerHTML</b>"
        // document.body.childNodes[i].innerText = "<b>innerTEXT</b>";
    }
}
// console.log(document.body.parentNode === document.documentElement);
console.log(document.head.nextElementSibling)
console.log(document.body.previousElementSibling)
// document.body.childNodes[1] = "Gamarjoba"