window.onload = function () {
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

    //#region  Identifying quantity of apples 

    quantity = quantityInp.value  // Apples variable defines quantity inputed by the user
    if (quantityInp.value == "") {  // If user didn't input any value, it would be 1 by default 
        quantity = 1
    }
    apples = []  // Pushing apples in array  //! 
    for (let i = 0; i < quantity; i++) {
        apples.push(new Apple())
    }

    //#endregion 

    //#region  Let the user choose snake's length and moving speed, or make it by default 

    if (snakelen.value == "") {
        snakelen.value = 1
    }
    if (speed.value == "") {
        speed.value = 5
    }

    //#endregion 

    my = setInterval(game, 1000 / speed.value);
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

let snake = new Snake()

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
        gs = canvas.width / 20;     
    }
    xv = yv = 0;  // Direction and velocity 
    snake = new Snake()
    storage.setItem("snake", JSON.stringify(features))

    window.onload()

}

function game() {

    //#region  Clearing and drawing new background

    ctx.fillStyle = "black";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    //#endregion 

    snake.move()

    //#region  Changing direction of snake's head 

    snake.px += xv;
    snake.py += yv;

    //#endregion 

    //#region  Eating

    for (let j = 0; j < snake.trail.length; j++) {
        for (let k = 0; k < quantity; k++) {
            if (snake.trail[j].x == apples[k].x && snake.trail[j].y == apples[k].y) {
                snake.eat(k)
            }
        }
    }

    //#endregion 

    //#region  The death of a snake, (happens when it touches the margins)

    if (snake.px < 0 ||
        snake.px > tc - 1 ||
        snake.py < 0 ||
        snake.py > tc - 1) {
        snake.dead()
    }

    //#endregion 

    //#region  Drawing whole snake body and checking a collision

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
   
    //#region  Drawing apples

    for (let i = 0; i < quantity; i++) {
        apples[i].draw()
    }

    //#endregion 

    record.innerHTML = "Your High Score " + (features.highScore) // Showing highest score
}


function showCurrent() {
    current.innerHTML = "Current length: " + (snake.tail)
    return snake.tail
}



//  addEventListeners 

//#region  Changing board size 
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
//#endregion  

//#region  Changing game speed
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

//#endregion 

newGame.addEventListener('click', function () {
    newGa()
})

document.addEventListener("keydown", keyPush);


