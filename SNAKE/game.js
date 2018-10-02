
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



function newGa() {
    clearInterval(my);

    features = {
        applquant: quantityInp.value,
        spd: speed.value,
        snkLeng: snakelen.value,
        highScore: 0,
    }
    if (storage.snake !== undefined) {
        features.highScore = myJSON.highScore;
        gs = canvas.width / 20;     // zoom 
    }
    tc = 20;     // რაოდენობა 
    ax = ay = 3;  // apple x and apple y 
    xv = yv = 0;  // direction and velocity 
    snake = new Snake()
    console.log(2);
    storage.setItem("snake", JSON.stringify(features))

    window.onload()

}
gs = canvas.width / 20;     // zoom 
tc = 20;

ax = ay = 3;  // apple x and apple y 
xv = yv = 0;  // direction and velocity 

let snake = new Snake()

function game() {

    //#region  clearing and drawing new background

    ctx.fillStyle = "black";
    ctx.fillRect(0, 0, canv.width, canv.height);

    //#endregion 

    snake.move()

    //#region  change direction and speed of snake head 

    snake.px += xv;
    snake.py += yv;

    //#endregion 

    //#region  snake deads, if snake touchs the margin 

    if (snake.px < 0 ||
        snake.px > tc - 1 ||
        snake.py < 0 ||
        snake.py > tc - 1) {
        snake.dead()
    }

    //#endregion 

    //#region  draw whole snake and check if it touched itself

    ctx.fillStyle = "lime";
    for (let i = 0; i < snake.trail.length; i++) {

        ctx.fillRect(snake.trail[i].x * gs, snake.trail[i].y * gs, gs - 2, gs - 2); // draw each part of snake

        // check if snake touchs itself, if only it is already "born"
        if (!((snake.px == snake.trail[snake.trail.length - 1].x) && (snake.py == snake.trail[snake.trail.length - 1].y))) { // is it "born" ?
            if (snake.trail[i].x == snake.px && snake.trail[i].y == snake.py) {  // did it touch itself ? 
                snake.dead()
            }
        }
    }

    //#endregion 

    //#region eating

    for (let j = 0; j < snake.trail.length; j++) {
        for (let k = 0; k < quantity; k++) {
            if (snake.trail[j].x == apple[k].x && snake.trail[j].y == apple[k].y) {
                snake.eat(k)
            }
        }
    }

    //#endregion 

    //#region drawing apples

    for (let i = 0; i < quantity; i++) {
        apple[i].draw()
    }

    //#endregion 

    record.innerHTML = "Your High Score " + (features.highScore) // showing high score
}


function showCurrent() {
    current.innerHTML = "Current length: " + (snake.tail)
    return snake.tail
}

//#region  make board big 

big.addEventListener('click', function () {
    canvas.width = 600;
    canvas.height = 600;
    newGa()
})


//#endregion 

//#region  make board normal
normal.addEventListener('click', function () {
    canvas.width = 400;
    canvas.height = 400;
    newGa()
})

//#endregion 

//#region  make board small 

small.addEventListener('click', function () {
    canvas.width = 200;
    canvas.height = 200;
    newGa()
})

//#endregion  


//#region  slow down game speed

novice.addEventListener('click', function () {
    speed.value = 3
    newGa()
})

//#endregion 

//#region  intermediate game speed

intermediate.addEventListener('click', function () {
    speed.value = 8
    newGa()
})

//#endregion  

//#region  fast game speed
 
hard.addEventListener('click', function () {
    speed.value = 15
    newGa()
})

//#endregion 


//#region  start new game 
 
newGame.addEventListener('click', function () {
    newGa()
})

 
//#endregion 