
window.onload = function () {
    canv = document.getElementById("canvas");
    ctx = canv.getContext("2d");
    document.addEventListener("keydown", keyPush);
    setInterval(game, 1000 / 5);
}
px = py = 10;
gs = tc = 20;
ax = ay = 3;  //apple x and apple y 
xv = yv = 0; // direction and velocity 
trail = [];
tail = 2;
function game() {
    px += xv;
    py += yv;
    if (px < 0) {
        px = tc - 1;
    }
    if (px > tc - 1) {
        px = 0;
    }
    if (py < 0) {
        py = tc - 1;
    }
    if (py > tc - 1) {
        py = 0;
    }
    ctx.fillStyle = "blue";
    ctx.fillRect(0, 0, canv.width, canv.height);

    ctx.fillStyle = "lime";
    for (var i = 0; i < trail.length; i++) {
        ctx.fillRect(trail[i].x * gs, trail[i].y * gs, gs - 2, gs - 2);
        if (trail[i].x == px && trail[i].y == py) {
            tail = 4;
        }
        // console.log(trail[3].x);
    }
    trail.push({ x: px, y: py });
    while (trail.length > tail) {
        trail.shift();
    }

    if (ax == px && ay == py) {
        tail++;
        ax = Math.floor(Math.random() * tc);
        ay = Math.floor(Math.random() * tc);

    }
    // ctx.fillRect(ax * gs, ay * gs, gs - 2, gs - 2);
    ctx.fillStyle = "red";
    ctx.beginPath();

    ctx.arc(ax * gs + 8, ay * gs + 8, 8, 0, Math.PI * 2);
    ctx.fill()
    // ctx.endPath()
}
function keyPush(evt) {
    switch (evt.keyCode) {
        case 37:
            xv = -1; yv = 0;
            break;
        case 38:
            xv = 0; yv = -1;
            break;
        case 39:
            xv = 1; yv = 0;
            break;
        case 40:
            xv = 0; yv = 1;
            break;
    }
}
