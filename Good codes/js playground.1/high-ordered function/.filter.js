
let animals = [
    { name: 'jeka', species: 'dzagli' },
    { name: 'melano', species: 'xari' },
    { name: 'marchelo', species: 'tutiyushi' },
    { name: 'sofaka', species: 'kata' },
    { name: 'jerry', species: 'tagvi' },
    { name: 'pluto', species: 'dzagli' },
]


console.log(animals);


// let dog = [];

// for (let i = 0; i < animals.length; i++) {
//     console.log(animals[i].species);
//     if (animals[i].species === "dzagli") {
//         dog.push(animals[i].name)
//     }
// }


// console.log(dog); 

let dog = animals.filter(
    function (animal) {
        return animal.species === "dzagli"
    }
);

console.log(dog);