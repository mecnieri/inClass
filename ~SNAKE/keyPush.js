function keyPush(e) {
    switch (e.keyCode) {
        case 37:
            if (xv === 1 && yv === 0) {
                snake.dead()
            }
            xv = -1; yv = 0;
            break;
        case 38:
            if (xv === 0 && yv === 1) {
                snake.dead()
            }
            xv = 0; yv = -1;
            break;
        case 39:
            if (xv === -1 && yv === 0) {
                snake.dead()
            }
            xv = 1; yv = 0;
            break;
        case 40:
            if (xv === 0 && yv === -1) {
                snake.dead()
            }
            xv = 0; yv = 1;
            break;
    }
}
