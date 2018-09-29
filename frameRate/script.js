let btn1 = document.getElementById('btn1');
let btn2 = document.getElementById('btn2');
let btn3 = document.getElementById('btn3');

let totalScore = document.getElementById('totalScore');
let highestScore = document.getElementById('highestScore');

let initBoardSize = document.getElementById('boardSize');
let initApples = document.getElementById('apple');
let initSnakeLength = document.getElementById('length');
let initSpeed = document.getElementById('speed');

let canvas = document.getElementById('mainBoard');
let ctx = canvas.getContext('2d');
let score = 0;
let speed;
let step = 10;
let snakeObj = {
    snakeLength: 4,
    x: 10,
    y: 10,
    dx: 10,
    dy: 0,
    w: 10,
    h: 10,
    color: 'blue',
};

snakeObj.snakeLength = initSnakeLength.value;

let snakeX;
let snakeY;

let apple = [];
let appleNum = 1;

class Snake {
    constructor(snakeLength, x, y) {
        this.snakeArray = [];
        this.snakeLength = snakeObj.snakeLength;
        this.x = 10;
        this.y = 10;

        this.canvas = document.getElementById('mainBoard');
        this.ctx = canvas.getContext('2d');
    }

    drawSnake() {
        this.snakeArray.push({ x: snakeObj.x, y: snakeObj.y });
        while (this.snakeArray.length > snakeObj.snakeLength) {
            this.snakeArray.shift();
        }

        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

        for (let i = 0; i < snakeObj.snakeLength; i++) {
            this.ctx.fillStyle = snakeObj.color;
           if( typeof this.snakeArray[i] !== 'undefined' ){
            this.ctx.fillRect(this.snakeArray[i].x, this.snakeArray[i].y, snakeObj.w, snakeObj.h);
           }
        }
        snakeObj.x += snakeObj.dx;
        snakeObj.y += snakeObj.dy;
    }

    eat(k) {
        apple[k].x = (Math.floor(Math.random() * 50)) * 10;
        apple[k].y = (Math.floor(Math.random() * 50)) * 10;
        snakeObj.snakeLength++;
    }

    gameOver(){
        clearInterval(myInterval);
    }

    initEvents() {
        document.addEventListener('keydown', function (event) {
            switch (event.keyCode) {
                case 37:
                    snakeObj.dx = -10; snakeObj.dy = 0;
                    break;
                case 38:
                    snakeObj.dx = 0; snakeObj.dy = -10;
                    break;
                case 39:
                    snakeObj.dx = 10; snakeObj.dy = 0;
                    break;
                case 40:
                    snakeObj.dx = 0; snakeObj.dy = 10;
                    break;
            }
        });
    }
}

let snake = new Snake();

class Apple {
    constructor() {
        this.x = (Math.floor(Math.random() * 50)) * 10;
        this.y = (Math.floor(Math.random() * 50)) * 10;
        this.color = "red";
    }

    drawApple() {
            ctx.beginPath();
            ctx.fillStyle = this.color;
            ctx.fillRect(this.x, this.y, 10, 10);
            ctx.fill();
    }

    initialAppleNum() {
        appleNum = initApples.value;
        if(appleNum >= 1){
            this.drawApple();
        }
    }
}

class Board {
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }
    boardSize() {
        this.board = document.getElementById('boardSize');
    }
}

let board = new Board();


snake.initEvents();

for (let i = 0; i < appleNum; i++) {
    apple.push(new Apple())
}

function game() {
    snake.drawSnake();

    for (let i = 0; i < appleNum; i++) {
        apple[i].drawApple();
    }

    for (let j = 0; j < snake.snakeArray.length; j++) {
        for (let k = 0; k < appleNum; k++) {
            if (snake.snakeArray[j].x == apple[k].x && snake.snakeArray[j].y == apple[k].y) {
                snake.eat(k);
                score += 10;
                totalScore.textContent = score;
            }
        }
    }

    if(snake.snakeArray[snake.snakeArray.length - 1].x === canvas.width - 10 || snake.snakeArray[snake.snakeArray.length - 1].x === 0 || snake.snakeArray[snake.snakeArray.length - 1].y === canvas.height - 10 || snake.snakeArray[snake.snakeArray.length - 1].y === 0){
        snake.gameOver();
    }

    if( snake.snakeArray.length > 4 ){       
        for(j = 0; j < snake.snakeArray.length - 1; j++){
            if( snake.snakeArray[snake.snakeArray.length - 1].x === snake.snakeArray[j].x 
                && snake.snakeArray[snake.snakeArray.length - 1].y === snake.snakeArray[j].y){
                snake.gameOver();
            }
        }
    }
}

let myInterval = setInterval(game, 100);

btn1.addEventListener('click', game());
btn2.addEventListener('click', game());
btn3.addEventListener('click', game());