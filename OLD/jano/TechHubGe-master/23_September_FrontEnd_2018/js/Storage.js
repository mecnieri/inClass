// window.localStorage
// window.sessionStorage
// localStorage
// sessionStorage

let storage = localStorage;
const key = "Mariami";
storage.setItem(key, "Project Snake");
console.log( `Key - ${key}, Value - ${storage.getItem(key)}` );

class Ball{
    constructor(x, y){
        this._x = x;
        this._y = y;
    }
}

let balls = [];
for(let i = 0; i < 8; i++){
    balls.push(  new Ball(1*i, 2*i) );
}

const ballsKey = 'balls';

storage.setItem(ballsKey, JSON.stringify(balls));

balls = JSON.parse(storage.getItem(ballsKey));

console.log(storage.length)
// console.log(balls instanceof Array);

