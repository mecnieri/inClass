
window.onload = function () {
    canv = document.getElementById("canvas");
    ctx = canv.getContext("2d");
    document.addEventListener("keydown", keyPush);
    apple = []
    storage = window.localStorage;
    if (storage.snake !== undefined) {
        myJSON = JSON.parse(storage.getItem("snake"));
        quantityInp.value = myJSON.applquant;
        speed.value = myJSON.spd
    }
    else {
        storage.setItem("snake", JSON.stringify(features))
        myJSON = JSON.parse(storage.getItem("snake"));
        snakelen.value = myJSON.snkLeng

        features.highScore = myJSON.highScore
    }
    quantity = quantityInp.value
    if (quantityInp.value == "") {
        quantity = 1
    }
    console.log(3);
    if (snakelen.value == "") {
        snakelen.value = 1
    }
    if (speed.value == "") {
        speed.value = 5
    }
    my = setInterval(game, 1000 / speed.value);

    for (let i = 0; i < quantity; i++) {
        apple.push(new Apple())
    }
}
let features = {
    applquant: quantityInp.value,
    spd: speed.value,
    snkLeng: snakelen.value,
    highScore: 0,
}

if (snakelen.value == "") {
    snakelen.value = 1
}
newGame.addEventListener('click', function () {
    newGa()
})

function newGa() {
        clearInterval(my);
        window.onload()

        features = {
            applquant: quantityInp.value,
            spd: speed.value,
            snkLeng: snakelen.value,
            highScore: 0,
        }
        if (storage.snake !== undefined) {
            features.highScore = myJSON.highScore;
            gs = canvas.width / 20;     // ზომა 
        }
        // my = setInterval(game, 1000 / speed.value);
        tc = 20;     // რაოდენობა 
        ax = ay = 3;  // apple x and apple y 
        xv = yv = 0;  // direction and velocity 
        snake = new Snake()
        console.log(2);
        storage.setItem("snake", JSON.stringify(features))


    }
gs = canvas.width / 20;     // ზომა 
tc = 20;     // რაოდენობა 

ax = ay = 3;  // apple x and apple y 
xv = yv = 0;  // direction and velocity 

let snake = new Snake()
console.log(1);
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

        if (!((snake.px == snake.trail[snake.trail.length - 1].x) && (snake.py == snake.trail[snake.trail.length - 1].y))) {
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
    record.innerHTML = "Your High Score " + (features.highScore)

}


function showCurrent() {
    current.innerHTML = "Current length: " + (snake.tail)
    return snake.tail
}

big.addEventListener('click', function () {
    canvas.width = 600;
    canvas.height = 600;
    newGa()
})

normal.addEventListener('click', function () {
    canvas.width = 400;
    canvas.height = 400;
    newGa()
})

small.addEventListener('click', function () {
    canvas.width = 200;
    canvas.height = 200;
    newGa()
})

novice.addEventListener('click', function () {
    speed.value = 3
    newGa()
})
intermediate.addEventListener('click', function () {
    speed.value = 8
    newGa()
})
hard.addEventListener('click', function () {
    speed.value = 15
    newGa()
})
    