// // let arr = ["I", "<3", "JavaScript"];

// // let removed = arr.splice(1, 1, "hate");  //cut 

// // let removed = arr.slice(1, 2);  // copy

// // console.log(arr, removed);

// // let nums = [2, 4, 9, 5, 7, 13, 24, 1];


// // let doubled = nums.map((number, index, arr) => {
// //     return number * 2;
// // });
// // console.table(doubled);

// // let users = [
// //         {
// //             id: 1, name: "Gela"
// //         },
// //         { id: 2, name: "John" },
// //         { id: 3, name: "Jimsheri" },
// //         { id: 4, name: "Jimsheri2" },
// //         { id: 5, name: "Jimsheri3" },

// //     ]


// // let html = users.map(user => {
// //     return `
// //     <div class="user">
// //             <h2 class="title">${user.name} <small> Id - ${user.id} </small></h2>
// //     </div>
// //     `;
// // });

// // document.body.innerHTML = html.join(" ");

// // console.table(html);


// // let john = { name: "John", age: 25 };
// // let adam = { name: "Adam", age: 30 };
// // let mary = { name: "Mary", age: 28 };

// // let arr = [john, adam, mary];

// // // alert(arr[1].mame);


// // function compare(a, b) {
// //         if (a > b) return 1;
// //         if (a == b) return 0;
// //         if (a < b) return -1;
// //     }

// //     console.log(arr.sort());


// // let john = { name: "John", age: 25 };
// // let adam = { name: "Adam", age: 30 };
// // let mary = { name: "Mary", age: 28 };

// // let arr = [john, adam, mary];

// // console.log(arr);
// // console.log(arr[1].name);
// // console.log(arr[1].name[0]);

// // // alert(arr[1].mame);


// // function compare(a, b) {
// //         if (a.name > b.name) return 1;
// //         if (a.name == b.name) return 0;
// //         if (a.name < b.name) return -1;
// //     }

// //  console.log(arr.sort(compare));
// //  console.log(nums.sort(compare));

// // let arr = ["I", "<3", "JavaScript"];

// // let removed = arr.splice(1, 1, "hate");

// // let removed = arr.slice(1, 2);

// // console.log(arr, removed);

// // let nums = [2, 4, 9, 5, 7, 13, 24, 1];

// // let users = [
// //     {
// //         id: 1, name: "Gela"
// //     },
// //     { id: 2, name: "John" },
// //     { id: 3, name: "Jimsheri" },
// //     { id: 4, name: "Jimsheri2" },
// //     { id: 5, name: "Jimsheri3" },

// // ]

// // function compare(a, b) {
// //     if (a > b) return 1;
// //     if (a == b) return 0;
// //     if (a < b) return -1;
// // }
// // console.log(nums.sort());
// // // console.log(nums.sort(compare));

// // // console.log(nums.sort((a, b) => { return a - b }));

// // // // let foundUser = users.find(user => user.id == 2);  //ერთი კონკრეტული 
// // let filtered = users.filter(user => user.id < 4);  //მასივი 
// // // // console.log(foundUser);
// // console.log(filtered);


// // // let doubled = nums.map((number, index, arr) => {
// // //     return number * 2;
// // // });

// // // console.table(doubled);


// // let john = { name: "John", age: 25 };
// // let adam = { name: "Adam", age: 30 };
// // let mary = { name: "Mary", age: 28 };

// // let arr = [john, adam, mary];

// // console.log(arr);
// // console.log(arr[1].name);
// // console.log(arr[1].name[0]);

// // // alert(arr[1].mame);


// // function compare(a, b) {
// //     if (a.name > b.name) return 1;
// //     if (a.name == b.name) return 0;
// //     if (a.name < b.name) return -1;
// //     }

// //  console.log(arr.sort(compare));
// //  console.log(nums.sort(compare));

// // function compare(a, b) {
// //     if (a > b) return 1;
// //     if (a == b) return 0;
// //     if (a < b) return -1;

// // }

// // let values = ["John", "Harry", "Mary", "Beth", "Harry", "Mary", "John"];


// // console.log(values.sort(compare));


// // let filtered = users.values(user => user.id = 4);  //მასივი 



// // console.log(values);

// let mixedStr = ["A", "B", "A", "C", "D", "D", "C", "X"];

// // let uniqueStr = mixedStr.filter((value, index) => {
// //     return mixedStr.indexOf(value) == index;

// // });
// // // //  ინდექსები შევადარეთ და რაც განსხვავებული იყო დაიკიდა 

// // // console.log(uniqueStr);

// // let tmp = [];

// // for( item of mixedStr){
// //     if (! tmp.includes(item)){
// //         tmp.push(item);
// //     }
// // }

// // console.log(uniqueStr);
// // console.log(tmp);





// // let John = { name: "John", surname: "Smith", id: 1 };
// // let Pete = { name: "Pete", surname: "Hunt", id: 2 };
// // let Mary = { name: "Mary", surname: "Key", id: 3 };

// // let users = [John, Pete, Mary];

// // console.log(users[0].id); 

// // let usersMapped = users.map(user => {
// //     return {
// //         fullName: user.name + " " + user.surname,
// //         id: user.id
// //     };
// // });

// // console.log(usersMapped[0].id);
// // console.log(usersMapped[0].fullName);

// // console.log(mixedStr);

// function* generator() {
//     yield 'H'
//     console.log("H");
//     yield 'e'
//     console.log("e");
//     yield 'l'
//     console.log("l");
//     yield 'l'
//     console.log("l");
//     yield 'o'
//     console.log("o");
// }


// let g = generator();

// // console.log(typeof g[Symbol.iterator] === 'function');

// // console.log(typeof g.next() === 'function');

// // console.log(g[Symbol.iterator]() === g);

// // console.log([...g]);

// // console.log(Array.from[g]);

// // for (let char of g) {
// //     // console.log(char);
// // }

// // let rangeCount = {
// //     start: 1,
// //     end: 13
// // }

// // rangeCount[Symbol.iterator] = function () {
// //     return {
// //         current: this.start,
// //         last: this.end,
// //         next() {
// //             if (this.current < this.last) {
// //                 return {
// //                     done: false,
// //                     value: this.current++
// //                 }
// //             }
// //             else {
// //                 return { done: true }
// //             }
// //         }
// //     }
// // }

// // for (let num of rangeCount){
// //     console.log(num);
// // }



// let set = new Set();

// /* 

// set.add()
// set.has()
// set.delete()
// set.clear()
// set.size()


// */


// set.add(5).add(1).add(1).add(8).add(1);
// console.log(set);


// console.log(set.keys())

// for (let key of set.keys()) {
//     console.log(key);
// }

// console.log(set.values());
// console.log(set.entries());


// for (let entry of set.entries()) {
//     console.log(entry);
// }

// for (let [a, b] of set.entries()) {
//     console.log(a, b);
// }

// for (let [key, value] of set.entries()) {
//     console.log(key, value);
// }





// let values = ["John", "Harry", "Mary", "Beth", "Harry", "Mary", "John"];

// let valuesSet = new Set(values);

// console.log(valuesSet);

// let nums = [1, 2, 4, 9, 5, 7, 13, 24];





// function subArr(arr) {
// //     let sum = 0;
// //     let mySet = new Set();

// //     for (let num of arr) {
// //         sum + - num;
// //         if (mySet.has(sum)) {
// //             return true;
// //         }

// //         mySet.add(sum);
// //     }
// //     return false;
// // }




// // console.log(subArr(nums));

// // let arr = ["I", "<3", "JavaScript"];

// // let removed = arr.splice(1, 1, "hate");

// // let removed = arr.slice(1, 2);

// // console.log(arr, removed);


// // let users = [
// //     {
// //         id: 1, name: "Gela"
// //     },
// //     { id: 2, name: "John" },
// //     { id: 3, name: "Jimsheri" },
// //     { id: 4, name: "Jimsheri2" },
// //     { id: 5, name: "Jimsheri3" },

// // ]

// // function compare(a, b) {
// //     if (a > b) return 1;
// //     if (a == b) return 0;
// //     if (a < b) return -1;
// // }
// // console.log(nums.sort());
// // // console.log(nums.sort(compare));

// // // console.log(nums.sort((a, b) => { return a - b }));

// // // // let foundUser = users.find(user => user.id == 2);  //ერთი კონკრეტული 
// // let filtered = users.filter(user => user.id < 4);  //მასივი 
// // // // console.log(foundUser);
// // console.log(filtered);


// // // let doubled = nums.map((number, index, arr) => {
// // //     return number * 2;
// // // });

// // // console.table(doubled);


// // let john = { name: "John", age: 25 };
// // let adam = { name: "Adam", age: 30 };
// // let mary = { name: "Mary", age: 28 };

// // let arr = [john, adam, mary];

// // console.log(arr);
// // console.log(arr[1].name);
// // console.log(arr[1].name[0]);

// // // alert(arr[1].mame);


// // function compare(a, b) {
// //     if (a.name > b.name) return 1;
// //     if (a.name == b.name) return 0;
// //     if (a.name < b.name) return -1;
// //     }

// //  console.log(arr.sort(compare));
// //  console.log(nums.sort(compare));

// // function compare(a, b) {
// //     if (a > b) return 1;
// //     if (a == b) return 0;
// //     if (a < b) return -1;

// // }

// // let values = ["John", "Harry", "Mary", "Beth", "Harry", "Mary", "John"];


// // console.log(values.sort(compare));


// // let filtered = users.values(user => user.id = 4);  //მასივი 



// // console.log(values);

// // let mixedStr = ["A", "B", "A", "C", "D", "D", "C", "X"];

// // let uniqueStr = mixedStr.filter((value, index) => {
// //     return mixedStr.indexOf(value) == index;

// // });
// // // //  ინდექსები შევადარეთ და რაც განსხვავებული იყო დაიკიდა 

// // // console.log(uniqueStr);

// // let tmp = [];

// // for( item of mixedStr){
// //     if (! tmp.includes(item)){
// //         tmp.push(item);
// //     }
// // }

// // console.log(uniqueStr);
// // console.log(tmp);





// // let John = { name: "John", surname: "Smith", id: 1 };
// // let Pete = { name: "Pete", surname: "Hunt", id: 2 };
// // let Mary = { name: "Mary", surname: "Key", id: 3 };

// // let users = [John, Pete, Mary];

// // console.log(users[0].id); 

// // let usersMapped = users.map(user => {
// //     return {
// //         fullName: user.name + " " + user.surname,
// //         id: user.id
// //     };
// // });

// // console.log(usersMapped[0].id);
// // console.log(usersMapped[0].fullName);


// // function* generator() {
// //     yield 'H'
// //     yield 'e'
// //     yield 'l'
// //     yield 'l'
// //     yield 'o'
// //     }

// //     //Array.from(), ...var, for value of items 

// //     let g = generator();

// //     console.log(typeof g[Symbol.iterator] === 'function');

// //     console.log(typeof g.next() === 'function');

// //     console.log(g[Symbol.iterator]() === g);

// //     console.log([...g]);

// //     console.log(Array.from);



// // let rangeCount = {
// //     start: 1,
// //     end: 13
// // }

// // rangeCount[Symbol.iterator] = function () {
// //     return {
// //         current: this.start,
// //         last: this.end,
// //         next() {
// //             if (this.current < this.last) {
// //                 return {
// //                     done: false,
// //                     value: this.current++
// //                 }
// //             }
// //             else {
// //                 return { done: true }
// //             }
// //         }
// //     }
// // }

// // for (let num of rangeCount){
// //     console.log(num);
// // }





// // Set 

// // let set = new Set();

// /* 

// set.add()
// set.has()
// set.delete()
// set.clear()
// set.size()


// // */


// // set.add(5).add(1).add(1).add(8).add(1);
// // console.log(set);


// // console.log(set.keys())

// // for (let key of set.keys()) {
// //     console.log(key);
// // }

// // console.log(set.values());

// // console.log(set.entries());



// // let values = ["John", "Harry", "Mary", "Beth", "Harry", "Mary", "John"];

// // let valuesSet = new Set(values);

// // // console.log(valuesSet);




// // let nums = [-1, 2, 4, 9, 5, 7, 13, 24, 4];


// // function subArr(arr) {
// //     let sum = 0;
// //     let mySet = new Set();

// //     for (let num of arr) {
// //         sum + - num;
// //         if (mySet.has(sum)) {
// //             return true;
// //         }

// //         mySet.add(sum);
// //     }
// //     return false;
// // }




// // console.log(subArr(nums));





// let now = new Date();

// // console.log(now);

// let start = new Date(0);
// // console.log(start);

// let fromString = new Date('2018-06-30')
// // console.log(fromString);

// let fromConst = new Date(2018, 5, 30, 14, 32, 48, 50);
// // console.log(fromConst);

// // console.log(fromConst.getFullYear());
// // console.log(fromConst.getMonth());
// console.log(fromConst.getDate());
// // console.log(fromConst.getHours());
// // console.log(fromConst.getDay());

// console.log(fromConst.getUTCMonth());


// let old = Date.now();

// let i  = 0 ;

// while (i<100000){

//     i++;
// }

// let current = Date.now();
// console.log(`elapsed time ${old - current}ms`);


// function getSecondsToTomorrow(){
//     let old = Date.now();
//     let tomorrow = Date.setDate(30)
// console.log(tomorrow - old);
// }


let myMap = new Map();

// map.get()
// map.set()

myMap.set(1, "one")
myMap.set(2, 'two')
myMap.set(false, 0)
myMap.set(true, 1)
myMap.set({ name: 'John' }, "User")

// console.table(myMap);

for (let value of myMap.values()) {
    // console.log(value);
}
for (let key of myMap.keys()) {
    // console.log(key);
}
for (let [key, value] of myMap.entries()) {
    console.log(key, value);
}


let prices = new Map([
    ['banana', 5],
    ['apple', 4],
    ['kiwi', 4],
]);

console.log(prices);

// {
//     name:'john',
//     age:40,
// }

let fromObj = new Map(Object.entries({
    name: 'john',
    age: 40
}));

console.log(fromObj);


function countWords (sentence){

}

let sentence = " ";