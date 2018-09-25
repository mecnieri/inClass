
window.onload = function () {
    canv = document.getElementById("canvas");
    ctx = canv.getContext("2d");
    document.addEventListener("keydown", keyPush);
    my = setInterval(game, 1000 / 5);
    apple = []
    quantity = 2
    for (let i = 0; i < quantity; i++) {
        apple.push(new Apple())
    }
}
newGame.addEventListener('click', function () {
    window.onload()
    gs = 20;     // ზომა 
    tc = 20;     // რაოდენობა 
    ax = ay = 3;  // apple x and apple y 
    xv = yv = 0;  // direction and velocity 
    snake = new Snake()
})
gs = 20;     // ზომა 
tc = 20;     // რაოდენობა 

ax = ay = 3;  // apple x and apple y 
xv = yv = 0;  // direction and velocity 

let snake = new Snake()


function game() {
    ctx.fillStyle = "black";
    ctx.fillRect(0, 0, canv.width, canv.height);

    snake.px += xv;
    snake.py += yv;

    if (snake.px < 0 ||
        snake.px > tc - 1 ||
        snake.py < 0 ||
        snake.py > tc - 1) {
        snake.dead()
    }

    ctx.fillStyle = "lime";
    for (let i = 0; i < snake.trail.length; i++) {
        ctx.fillRect(snake.trail[i].x * gs, snake.trail[i].y * gs, gs - 2, gs - 2);
        if (snake.tail > 3) {
            if (snake.trail[i].x == snake.px && snake.trail[i].y == snake.py) {
                snake.dead()
            }
        }
    }


    snake.move()

    //#region eating

    for (let j = 0; j < snake.trail.length; j++) {
        for (let k = 0; k < quantity; k++) {

            if (snake.trail[j].x == apple[k].x && snake.trail[j].y == apple[k].y) {
                snake.eat(k)
            }
        }
    }

    //#endregion 

    for (let i = 0; i < quantity; i++) {
        apple[i].draw()
    }
}


