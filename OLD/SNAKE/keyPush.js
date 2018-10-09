function keyPush(e) {
    switch (e.keyCode) {
        case 37:
            if (!(xv === 1 && yv === 0)) {
                xv = -1; yv = 0;
            }
            break;
        case 38:
            if (!(xv === 0 && yv === 1)) {
                xv = 0; yv = -1;
            }
            break;
        case 39:
            if (!(xv === -1 && yv === 0)) {
                xv = 1; yv = 0;
            }
            break;
        case 40:
            if (!(xv === 0 && yv === -1)) {
                xv = 0; yv = 1;
            }
            break;
    }
}