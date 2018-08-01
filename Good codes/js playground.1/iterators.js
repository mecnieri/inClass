// იტერატორები გამოიყენება ერეიდან სასურველი ელემენტების ამოსარჩევად.
//      ზოგი ქმნის ახალ ერეის, ზოგი არა
// iterator IS method ???

//#region   about .forEach


// .forEach() will  execute the same code  on each element of an array

// .forEach() is an array method. It must be called upon an array.

// Any changes to the iterated array value won't be updated in the original array

// The return value is undefined.


// Syntactically, the name of the parameter does not matter



//#endregion 
//#region .forEach syntax


// let groceries = ['whole wheat flour', 'brown sugar', 'salt', 'cranberries', 'walnuts']; 

// groceries.forEach(function(groceryItem) {
//   console.log(' - ' + groceryItem);
// });
// The code above will log a nicely formatted list of the groceries to the console. Let's explore each bit of syntax.

// The first line is an array of grocery items.
// groceries.forEach calls the .forEach() method on the groceries array.

//#endregion 


//#region   about .map()



//#endregion 
//#region  .map() syntax

// let animals = ['Hen', 'elephant', 'llama', 'leopard', 'ostrich', 'Whale', 'octopus', 'rabbit', 'lion', 'dog'];

// // Create the secretMessage array below
// let secretMessage = animals.map(function(first){
//  return first[0] 
// }
// )

// console.log(secretMessage.join(''));


//#endregion 

//#region   about .filter()

//  Like .map(), .filter() returns a new array.

//  However, .filter() returns  CERTAIN  elements
//      from the original array that evaluate to
//          truthy based on conditions written in 
//               the block of the method.



//#endregion 

//#region .filter() syntax



//#endregion 



// .forEach() is used to execute the same code on every element in an array but does not change the array and returns undefined.

// .map() executes the same code on every element in an array and returns a new array with the updated elements.

// .filter() checks every element in an array to see if it meets certain criteria and returns a new array with the elements that return truthy for the criteria.

// All iterator methods can be written using arrow function syntax. In fact, given the succinctness and the implicit return of arrow function syntax, this is quickly becoming the preferred way to write these types of method calls.





let moreThen = (function (t, n) {
    return t +n
})


let a = [1, 2, 3, 4, 5, 6, 7, 8, 9]

let b = a.forEach(moreThen)
console.log(b);

let c = a.map(moreThen)
console.log(c);

let d = a.filter(moreThen)
console.log(d);

let e = a.reduce(moreThen)
console.log(e);

