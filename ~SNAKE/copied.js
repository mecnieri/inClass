
window.onload = function () {
    canv = document.getElementById("canvas");
    ctx = canv.getContext("2d");
    document.addEventListener("keydown", keyPush);
    my = setInterval(game, 1000 / 5);
}


gs = tc = 20; // grid table 
ax = ay = 3;  // apple x and apple y 
xv = yv = 0; // direction and velocity 
trail = [];
tail = 1;
 class Snake {
    constructor() {
        this.px = 4;
        this.py = 4;
    }
    dead() {
        clearInterval(my);
        console.log("your score is " + trail.length);
    }
}

class Apple {
    constructor() {
        this.x = ax * gs + 10
        this.y = ay * gs + 10
        this.radius = 8;
        this.color = "red"
        this.startAngle = 0;
        this.endAngle = Math.PI * 2;
        this.quantity = 3;

    }
    draw() {
        for (let i = 0; i < this.quantity; i++) {
            ctx.beginPath();
            ctx.fillStyle = this.color;
            ctx.arc(this.x, this.y, this.radius, this.startAngle, this.endAngle);
            ctx.fill()
            // console.log(this.x);
        }
    }
}

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
    for (var i = 0; i < trail.length; i++) {
        ctx.fillRect(trail[i].x * gs, trail[i].y * gs, gs - 2, gs - 2);
        if (tail > 3) {
            if (trail[i].x == snake.px && trail[i].y == snake.py) {
                snake.dead()
            }
        }
    }
    trail.push({ x: snake.px, y: snake.py });
    while (trail.length > tail) {
        trail.shift();
    }

    if (ax == snake.px && ay == snake.py) {
        tail++;
        ax = Math.floor(Math.random() * tc);
        ay = Math.floor(Math.random() * tc);

    }


    let apple = new Apple().draw()
}


 