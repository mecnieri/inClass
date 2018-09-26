
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
        features.highScore = myJSON.highScore;
    } else {
        storage.setItem("snake", JSON.stringify(features))
    }
    quantity = quantityInp.value
    my = setInterval(game, 1000 / speed.value);
    for (let i = 0; i < quantity; i++) {
        apple.push(new Apple())
    }

    console.log(4);

}
let features = {
    applquant: quantityInp.value,
    spd: speed.value,
    snkLeng: snakelen.value,
    highScore: 0,
}
console.log(0);
newGame.addEventListener('click', function () {
    features = {
        applquant: quantityInp.value,
        spd: speed.value,
        snkLeng: snakelen.value,
        highScore: 0,
    }
    if (storage.snake !== undefined) {
        features.highScore = myJSON.highScore;
    }
    console.log(features);

    gs = 20;     // ზომა 
    tc = 20;     // რაოდენობა 
    ax = ay = 3;  // apple x and apple y 
    xv = yv = 0;  // direction and velocity 
    snake = new Snake()


    console.log(1);
    window.onload()
    console.log(2);

    storage.setItem("snake", JSON.stringify(features))
    console.log(3);
})
gs = 20;     // ზომა 
tc = 20;     // რაოდენობა 

ax = ay = 3;  // apple x and apple y 
xv = yv = 0;  // direction and velocity 

let snake = new Snake()


function game() {
    features = {
        applquant: quantityInp.value,
        spd: speed.value,
        snkLeng: snakelen.value,
        highScore: 0,
    }
    if (storage.snake == undefined) {
        storage.setItem("snake", JSON.stringify(features))
    }
    if (storage.snake !== undefined) {
        features.highScore = myJSON.highScore;
    }
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

    if (myJSON) {
        if (snake.tail <= myJSON.highScore) {
            record.innerHTML = "Your High Score " + (features.highScore)
        }
        else {
            myJSON.highScore = snake.tail
            storage.setItem("snake", JSON.stringify(myJSON))
            console.log(snake.tail);
            record.innerHTML = "Your High Score " + (snake.tail)
        }
    }
    else {
        record.innerHTML = "Your High Score " + (snake.tail)
    }

}


function showCurrent() {
    current.innerHTML = "Current length: " + (snake.tail)
    return snake.tail
}



