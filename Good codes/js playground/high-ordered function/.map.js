
let animals = [
    { name: 'jeka', species: 'dzagli' },
    { name: 'melano', species: 'xari' },
    { name: 'marchelo', species: 'tutiyushi' },
    { name: 'sofaka', species: 'kata' },
    { name: 'jerry', species: 'tagvi' },
    { name: 'pluto', species: 'dzagli' },
]


var names = animals.map(
    function (animal) {
        return animal.name + " aris " + animal.species;
    }
)

console.log(names);



// var names = []
// for (let i = 0; i < animals.length; i++) {
//      names.push(animals[i].name)
// }
console.log(names);
console.log(Array.isArray(names));