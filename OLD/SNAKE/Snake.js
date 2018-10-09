
if (storage.snake !== undefined) {
    myJSON = JSON.parse(storage.getItem("snake"));
    snakelen.value = myJSON.snkLeng
}
class Snake {
    constructor() {
        this.px = Math.floor(Math.random() * 20); // Creating snake's head randomly 
        this.py = Math.floor(Math.random() * 20);
        this.trail = [];
        this.startingTail = snakelen.value; // User chooses starting length of the snake's body
        this.tail = this.startingTail;  // Tail is snake's length changable while eating new apples(lets call it 'actual' length), so it's assigned to user's choice 
    }
    move() {
        this.trail.push({ x: this.px, y: this.py }); // Pushing new parts whithin snake's "body". Snake head's coordinates(On X and Y axes) determine coordinates of body's new part
        while (this.trail.length > this.tail) {  // If the length of the snake's body, is longer than it's 'actual' length, then cut redundant part
            this.trail.shift(); // Cuting last part of the snake (first in array)
        }
    }
    eat(k) {
        apples[k].x = Math.floor(Math.random() * tc); //  Changing the coordinates of the 'eaten' apple
        apples[k].y = Math.floor(Math.random() * tc);
         for (let part of this.trail) { 
             if (apples[k].x === part.x && apples[k].y === part.y) {   // Checking whether new coordinates match snakes part
                return this.eat(k)                                     // If they are matching, creating new coordinates 
            }
        }
        this.tail++;   //  The growth of the snake
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
