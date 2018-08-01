
//   let myArray = [1,2,3,4,5,6,7,8,9]

//   console.table(myArray);

//   for (let i = 0; i < myArray.length; i++) {
// console.log(`index : ${i}, value " ${myArray[i]}`); 
//   }

let myArray = ["a", 2, 3, "c", 5, 6, 7, 8, 9]

//   console.table(myArray);

//   for (let i = 0; i < myArray.length; i++) {
// console.log(`index : ${i}, value " ${myArray[i]}`);      
//   }


myArray.forEach(function (value, index, arr) {
    console.log(`index : ${index}, value : ${value}`);
    // console.log(arr);
});

// generator/ generator function
// Iterable protocol
// Iterator protocol



// @@iterator

let myIterable = {
    [Symbol.iterator]: () => ({
        items: "hello iterator".split(''),
        next: function next(){
            return{
                done: this.items.length === 0,
                value: this.items.shift()
            }
        }

    })
}
// temporary dead zone

// console.log(object );
// console.log(test);

// var test = 0;
// console.log(test);


// console.log(a);
// let a = 23;

// // console.log(a);

// var x = 'outer scope';
// function() {
//     console.log(x);
//     x = 'inner scope';
// }



// if (1) {
//     console.log(x);
//     var x = 'inner scope';
// }


let myArray = ["a", 2, 3, 4, 5, 6, 7, 8, 9]

//   console.table(myArray);

//   for (let i = 0; i < myArray.length; i++) {
// console.log(`index : ${i}, value " ${myArray[i]}`);      
//   }


myArray.forEach();