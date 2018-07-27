
// arrays can store any data types
//  (including strings, numbers, and booleans) 

// zero-indexed ნულიდან იწყება ათვლა 
// Each item inside of an array is at a numbered position, starting at 0.

// Arrays are created with brackets [].

// We can access one item in an array using its numbered position, with syntax like: myArray[0].

// We can also change an item in an array using its numbered position, with syntax like myArray[0] = "new string";

// Arrays have a length property, which allows you to see how many items are in an array.

// Arrays have their own methods, including .push() and .pop(), which add and remove items from an array, respectively.

// Arrays have many other methods that perform different functions, such as .slice() and .shift().
//       You can read the documentation for any array method on the Mozilla Developer Network website.

// Variables that contain arrays can be declared with let or const. Even when declared with const, arrays are still mutable;
//       they can be changed. However, a variable declared with const cannot be reassigned.





//#region ერეის შექმნა

// let variable = ['',"" ];

// let bucketList = ['Rappel into a cave', 'Take a falconry class', 'Learn to juggle'];

// console.log(bucketList);
//#endregion 

//#region Property Access ელემენტის მიწვდომა (გამოძახება)
 
// მეორე წევრის, მესამე ასო 
// stores strings in a similar way that it stores arrays.

// let bucketList = ['Rappel into a cave', 'Take a falconry class', 'Learn to juggle'];
// console.log(bucketList[1][2]);

//#endregion 

//#region ერეის განახლება

// let seasons = ["Winter", "Spring", "Summer", "Fall"];

// seasons[9] = "Autumn";
// console.log(seasons);
//#endregion 

//#region .push() ამატებს ელემეტს ბოლოში 
 
// let newYearsResolutions = ['item 0', 'item 1', 'item 2'];

// newYearsResolutions.push('item 3', 'item 4');

// console.log(newYearsResolutions);
 
//#endregion 

//#region .pop() მხოლოდ ბოლოზე ელემენტის გამოგდებაზე მუშაობს 
 
// let newYearsResolutions = ['item 0', 'item 1', 'item 2'];

// newYearsResolutions.pop();

// console.log(newYearsResolutions); 
 
//#endregion 

//#region ერეიში ელემენტების დამატება და მათი შეჯამება 


// let a = [];

// do {
//     x = prompt("enter number here");
//     a.push(Number(x));
// } while (x != "" && x != null);

// let sum = 0;
// for (let index = 0; index < a.length; index++) {

//     sum = sum + a[index];

// }

// console.log(a);
// document.writeln(a);

// console.log(sum);
// document.writeln(sum);


//#endregion 

