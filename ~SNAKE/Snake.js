class Snake {
    constructor() {
        this.px = 4;
        this.py = 4;
        this.trail = [];
        this.startingTail = 24;
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
    }
    dead() {
        console.log("your score is " + this.trail.length);
        clearInterval(my);
    }
}
