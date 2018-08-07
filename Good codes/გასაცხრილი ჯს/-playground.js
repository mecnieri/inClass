// function synch(func) {

//     func("Syncronys")
// }

// synch(alert);
// alert("test")
// console.log(alert);..
 

// (x) => {return x **2 }

// () => {}
// (x) => {return x **2 }
// x => x**2;
//#endregion 



// let from = 'John';
// showMessage(from, 'Hello');


// function getName(){
//     alert(typeof(getName));
// }

// let getNameV2 = function(){
//     alert(typeof(getNameV2));
// }
// getName();
// getNameV2();


// let me = "Giorgi Abzianidze";

// function vinaoba() {
//     return "Me var " + me + "!";
// }
// me = "bziki";
// console.log(vinaoba());
// console.log(vinaoba);
// console.log(typeof(vinaoba));
// console.log(typeof(vinaoba()));




// let animals = [
//     { name: 'jeka', species: 'dzagli' },
//     { name: 'melano', species: 'xari' },
//     { name: 'marchelo', species: 'tutiyushi' },
//     { name: 'sofaka', species: 'kata' },
//     { name: 'jerry', species: 'tagvi' },
//     { name: 'pluto', species: 'dzagli' },
// ]


// var names = animals.map(
//     function (animal) {
//         return animal.name + " aris " + animal.species;
//     }
// )

// console.log(names);



// var names = []
// for (let i = 0; i < animals.length; i++) {
//      names.push(animals[i].name)
// }
// console.log(names);
// console.log(Array.isArray(names));
// let bomji = {
//     saxeli: "zaqro",
//     gvari: "bomjishvili",
//     dzili: 15,
//     svams: 2,

// }

// let { saxeli, dzili, gvari } = bomji;


// console.log("chems ezoshi bomj " + saxeli + "s yoveldge dzinavs " + dzili + "saati. misi gvaria " + gvari);


// let obj = { ricx: 4 }
// let arr = [2, 4, 6, 68]

// let ap = function (a, b, c) {
//     return this.ricx + a + b + c;
// }
// console.log(ap.call(obj, ...arr));

// console.log(arr);
// console.log( ...arr);
// console.log(arr);

// let dog = {
//     sound : "woof"
//     talk : function () {
//         console.log(this.sound);
//     }
// }

// dog.talk()

// console.log(dog.talk());


// let talkFunction = dog.talk
// talkFunction()

// console.log(this);

// let nums = [2,4,9,5,55,7,13,24,1,-1];



// // function compare(a, b){
// //     if( a > b) return 1;
// //     if( a == b) return 0;
// //     if( a < b ) return -1;
// // }

// console.log(nums.sort((a, b) => { return a - b; }));


// var array = [1,2,3,4,5,6];
// console.log(array.slice(-3)[0]); // 6

// // var array = [1,2,3,4,5,6];

// // var val = array[array.length - 1]; 

// var citrus = fruits.slice(3, array.length);

// console.log(val);