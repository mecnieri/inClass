let storage = window.localStorage;
let jsn = JSON.parse(storage.getItem("snake"))

class Snake {
    constructor() {
        this.px = 4;
        this.py = 4;
        this.trail = [];
        this.startingTail = jsn.snkLeng;
        this.tail = this.startingTail;

    }


    move() {
        this.trail.push({ x: this.px, y: this.py });
        while (this.trail.length > this.tail) {
            this.trail.shift();
        }
    }
    eat(k) {
        apple[k].x = Math.floor(Math.random() * tc);
        apple[k].y = Math.floor(Math.random() * tc);
        this.tail++;
        showCurrent()
        
    }
    dead() {
        clearInterval(my);
        showCurrent();
        console.log("your score is " + snake.trail.length);
    }
}
