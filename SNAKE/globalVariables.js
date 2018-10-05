const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
const storage = window.localStorage;
const tc = 20;                   // Quantity of table columns and rows
let gs = canvas.width / tc;      // Grid size 
let xv = yv = 0;                 // Starting direction and velocity 