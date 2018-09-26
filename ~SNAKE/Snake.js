let storage = window.localStorage;

if (storage.snake !== "undefined") {
    myJSON = JSON.parse(storage.getItem("snake"));
    snakelen.value = myJSON.snkLeng
}
class Snake {
    constructor() {
        this.px = 4;
        this.py = 4;
        this.trail = [];
        this.startingTail = snakelen.value;
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
        if (this.tail > myJSON.highScore) {
            myJSON.highScore = this.tail
            storage.setItem("snake", JSON.stringify(myJSON))
            console.log(this.tail);
        }
        console.log("your score is " + snake.trail.length);
    }
}
