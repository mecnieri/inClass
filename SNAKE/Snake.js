
if (storage.snake !== undefined) {
    myJSON = JSON.parse(storage.getItem("snake"));
    snakelen.value = myJSON.snkLeng
}
class Snake {
    constructor() {
        this.px = Math.floor(Math.random() * 20); // create snake's head randomly 
        this.py = Math.floor(Math.random() * 20);
        this.trail = [];
        this.startingTail = snakelen.value; // user chooses snake's starting length
        this.tail = this.startingTail;  // tail is snake's true length, so it's assigned to user's choice 
    }
    move() {
        this.trail.push({ x: this.px, y: this.py }); // push new parts in snake's "body". Snake's head coordinates determine new part's coordinates 
        while (this.trail.length > this.tail) {  // if length of snake's body, is longer than it's true length, then cut redundant part
            this.trail.shift(); // cut last part of snake (first in array)
        }
    }
    eat(k) {
        apples[k].x = Math.floor(Math.random() * tc); //  change "eaten" apple's coordinates 
        apples[k].y = Math.floor(Math.random() * tc);
         for (let part of this.trail) { 
             if (apples[k].x === part.x && apples[k].y === part.y) {   // check if new coordinates matches snakes part
                return this.eat(k)                                     // if it matches create new coordinates 
            }
        }
        this.tail++;   //  snake grows
        showCurrent()
    }
    dead() {
        ctx.fillStyle = "gray";
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        clearInterval(my);
        showCurrent();

        ctx.font = "30px Comic Sans MS";
        ctx.fillStyle = "yellow";
        ctx.textAlign = "center";
        ctx.fillText("Your score is " + snake.trail.length, canvas.width / 2, canvas.height / 2 + 50);

        if (this.tail > myJSON.highScore) {
            myJSON.highScore = this.tail
            storage.setItem("snake", JSON.stringify(myJSON))
            ctx.font = "30px Comic Sans MS";
            ctx.fillStyle = "yellow";
            ctx.textAlign = "center";
            ctx.fillText('Congrats!!!', canvas.width / 2, canvas.height / 2 - 100);
            ctx.fillText('You have beaten', canvas.width / 2, canvas.height / 2 - 50);
            ctx.fillText('your record !!!', canvas.width / 2, canvas.height / 2);
        }
    }
}
