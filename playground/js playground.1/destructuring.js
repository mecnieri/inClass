let address = {
    planet: "Earth",
    continent: "Europe",
    country: "Georgia",
    city: "Tbilisi",
    street: "Sairme",
}

console.log(object);



// Destructuring

// Assing variables from objects
let voxel = { x: 3.6, y: 6.3, z: 4.21 }
console.log(voxel);

console.log(x);
let x = voxel.x;
console.log(x);

let y = voxel.y;
console.log(y);

let z = voxel.z;
console.log(z);

const { x, y, z } = voxel;

console.log(x);

//სახელების გადარქმევა
const { x: a, y: b, z: c } = voxel;

console.log(x);
console.log(a);

const nest = {
    start: { x: 5, y: 6 },
    end: { x: 6, y: -9 }
}

const { start: { x: startX, y: startY } } = nest;

console.log(startX);
