// function sorting(n) {

//     let str = n.toString().split("")
//     str
//     let sort = str.sort()
//     if (sort[0] < sort[sort.length - 1]) {
//         return parseInt(sort.reverse().join("").toString())
//     } else {
//         return parseInt(sort.toString())
//     }

// }

// console.log(sorting(2));
// console.log(typeof(sorting(111)));
// let arr1 = [1, -2, 3, 4]; let arr2 = [8, 3, -8, 1];
// let merged = [0, ...arr1, 2, ...arr2]; alert(merged)

// Exercise 14 

let john = { name: "John", age: 25 };
let adam = { name: "Adam", age: 30 };
let mary = { name: "Mary", age: 28 };
let arr = [john, adam, mary];

// // for(let name of arr){
// //     console.log(name.name);
// // }


function sortByName() {
    //    return users.map(item => item.name).sort()
    arr.sort((a, b) => a.name > b.name)
}
// sortByName(arr);//
//  now: [adam, john, mary]
//  alert(arr[1].name); // John

sortByName()
console.log(arr);
console.log(arr[1].name);

