let arr = ["I", "<3", "Javascript"];
// let removed = arr.splice(1, 1);
let removed = arr.slice(1, 2);
// console.log(arr, removed);

let nums = [2,4,9,5,7,13,24,1,-1];

let users = [
    { id: 1, name: "Gela"},
    { id: 2, name: "John"},
    { id: 3, name: "Jimsheri"},
    { id: 4, name: "Ani"},
    { id: 5, name: "Koba"},
]

function compare(a, b){
    if( a > b) return 1;
    if( a == b) return 0;
    if( a < b ) return -1;
}

// console.log(nums.sort((a, b) => { return a - b; }));

let foundUser = users.find( user => user.id == 2 );
let filtered = users.filter( user => user.id < 4 );
// console.log(filtered)

let doubled = nums.map((number, index, arr) => {
    return number * 2;
});

// console.table(doubled);

let html = users.map(user=> {
    return `
        <div class="user">
            <h2 class="title"> ${user.name} <small>Id - ${user.id}</small></h2>
        </div>
    `;
});

document.body.innerHTML = html.join("");
// console.table(html);

let mixedStr = ["A", "B", "A", "C", "D", "D", "C", "X"];

let uniqueStr = mixedStr.filter( (value, index) => {
    return mixedStr.indexOf(value) === index;
});

// let tmp = [];
// for ( item of mixedStr ){
//     if(! tmp.includes(item) ) {
//         tmp.push(item);
//     }
// }

// console.table(uniqueStr);
// console.table(tmp);

// console.log(mixedStr)

function* generator(){
    yield 'H'
    console.log("H")
    yield 'e'
    console.log("e")
    yield 'l'
    console.log("l")
    yield 'l'
    console.log("l")
    yield 'o'
    console.log("o")
}

// Array.from(), ...var, for value of items
let g = generator();

// console.log(typeof g[Symbol.iterator] === 'function')

// console.log(typeof g.next() === 'function');

// console.log(g[Symbol.iterator]() === g);
// console.log([...g])
// console.log(Array.from(g))

// for ( let char of g){
//      console.log(char);
// }

let rangeCount = {
    start: 1,
    end: 13
}
// {
//     value,
//     done: false|true
// }
rangeCount[Symbol.iterator] = function(){
    return {
        current: this.start,
        last: this.end,
        next(){
            if( this.current < this.last){
                return {
                    done: false,
                    value: this.current++
                }
            }
            else {
                return { done: true }
            }
        }
    }
}

// for( let num of rangeCount) {
//     console.log(num);
// }


// Set

let set = new Set();

/*

set.add()
set.has()
set.delete()
set.clear()
set.size
*/

set.add(5).add(1).add(8).add(1);
// console.log(set)
// keys, values, entries

// console.log(set.keys())

for ( let key of set.keys()) {
    // console.log(key)
}

// console.log(set.values())

for ( let value of set.values()) {
    // console.log(value)
}

// console.log(set.entries())
for ( let [key,value] of set.entries()) {
    // console.log(key, value)
    // entry[0] entry[1]
}

let numsSet = new Set(nums);

// console.log(numsSet)

function subArr(arr){
    let sum = 0;
    let mySet = new Set();

    for ( let num of arr){
        sum += num;
    
        if( mySet.has(sum) ){
            return true;
        }
        mySet.add(sum);
    }
    return false;
}

// console.log(subArr(nums))

// Date
// new Date()
// new Date(milliseconds)
// new Date(datestring) 
// new Date(year, month, date, hours, minutes, seconds, ms)

let now = new Date();
// console.log(now)

// UTC
// 1970 1 Jan
let start = new Date(0);
// console.log(start)

let fromString = new Date('2018-06-30');
// console.log(fromString)

let fromConst = new Date(2018, 5, 30, 14, 32, 48, 50);
// console.log(fromConst)

// console.log(fromConst.getFullYear())
// console.log(fromConst.getMonth())
// console.log(fromConst.getDate())
// console.log(fromConst.getHours())
// console.log(fromConst.getDay())
// 0 Sun - 6 Sat
// console.log(fromConst.getUTCMonth())
// console.log(fromConst.getUTCDate())
// console.log(fromConst.getUTCDay())

// console.log(fromConst.toString())

let old = Date.now();

let i = 0;
while( i < 1000000000 ){
    i++;
}
let current = Date.now();

// console.log(`elapsed time ${old - current} ms`)

// last_name

let myMap = new Map();

// map.set()
// map.get()

myMap.set(1, "One");
myMap.set(2, 'Two');
myMap.set(false, 0);
myMap.set(true, 1);
myMap.set({name:'John'}, "User");

// console.table(myMap)
// console.log(myMap.keys())
for ( let key of myMap.keys()){
    // console.log(key)
}

for ( let value of myMap.values()){
    // console.log(value)
}

for ( let [key, value] of myMap.entries()){
    // console.log(key, value)
}
 

let prices = new Map([
    ['banana', 5],
    ['apple', 4],
    ['kiwi', 8],
]);

console.log(prices)
// {
//     name: 'john',
//     age: 40
// }
let fromObj = new Map(Object.entries({
    name: 'john',
    age: 40,
    stressed: true
}));

console.log(fromObj)