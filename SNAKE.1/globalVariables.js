const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
const storage = window.localStorage;
const tc = 20;                   // table columns and rows quantity
let gs = canvas.width / tc;      // grid size 
let xv = yv = 0;                 // starting direction and velocity 
let naxva = true; 