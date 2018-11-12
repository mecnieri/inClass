let person = {
    name: 'John',
    lastname : "Doe",
    age: 13,
    isCool : false,
}

let person2 = person;

let a = 8;
let b = a;
// console.log(person2.age, person.lastname);

let myObject = new Object();
let myObjectOther = {};
/* 
    myObject = {
        name : "test name",
        lastname : "test lastname"
    } 

*/
// myObject.name = "test name"
// myObject.lastname = "test lastname"
// lastName, getLastName()
function Driver(name = '', lastname = 'Empty', age = 0){
    this.name = name;
    this.lastName = lastname;
    this.age = age;
}

// console.log(person === person2)
let driver1 = new Driver("Driver 1", "Driver 1 LastName", 24);
// driver1.name = 'driver1';
console.log(driver1.age)

let driver2 = new Driver("Driver 2", undefined, 33);
driver1.name = 'driver2';
console.log(driver2.lastName, driver2.age)
// console.log(driver1 === driver2)

function Car({ year = new Date().getFullYear(), brand = '', model = '' }){
    this.year = year;
    this.brand = brand;
    this.model = model;
}

let params = {
    year: 2017,
    brand: "Ford",
    model: "Mustang",
}
let car = new Car(params);
// console.log(car);
myFunc()
function myFunc(){
    console.log("MyFunc")
}


let myFuncDec = function(a, b){
    // console.log("myFuncDec")
    return a + b;
}

// myFuncDec();
let myArrowFunc = (a, b) => a + b;

function clos(a, b){
    return () => a + b;
}
let z = myArrowFunc(5,8);
console.log(z)
console.log(clos(5,8)())


