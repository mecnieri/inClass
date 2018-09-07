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

// let john = { name: "John", age: 25 };
// let adam = { name: "Adam", age: 30 };
// let mary = { name: "Mary", age: 28 };
// let arr = [john, adam, mary];

// // // for(let name of arr){
// // //     console.log(name.name);
// // // }


// function sortByName() {
//     //    return users.map(item => item.name).sort()
//     arr.sort((a, b) => a.name > b.name)
// }
// // sortByName(arr);//
// //  now: [adam, john, mary]
// //  alert(arr[1].name); // John

// sortByName()
// console.log(arr);
// console.log(arr[1].name);

// function steps(st) {
//     let result = ["'"]
//     for (let o = 0; o < 2*st; o++) {
//         result.push(' ')
//     }

//     for (let i = 0; i < st; i++) {
//         result.length = 2*st;
//         result[result.length] = "'"
//         result[st-i] = 'w'
//         result[st] = 'w'
//         result[st+i] = 'w'
        
//         let a = result.join('')
//         console.log(a);
//      }
// }
// steps(10);


// function printNum(n) {
//     if (n === 0) {
//         return;
//     }

//     console.log(n);
//     printNum(n - 1)
// }

// printNum(10)


// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9]
// let chuncked = []

// function chunck(array, length) {

//     let len = Math.ceil(arr.length / length);
//     for (let i = 0; i < len; i++) {
//         chuncked.push(new Array)

//     }
//     array.forEach(element => {
//         chuncked[Math.floor(arr.indexOf(element) / length)].push(element)
//     });
//     return chuncked
// }

// console.log(chunck(arr, 2));
