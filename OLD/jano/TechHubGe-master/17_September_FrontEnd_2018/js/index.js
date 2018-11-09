//#region Modernizr
/*
if( Modernizr.canvas ){
    // supported
}
else {
    // bad
}
*/
//#endregion

window.onload = function(){
    let canvas = document.getElementById('myCanvas');
    let context = canvas.getContext('2d');

    context.fillStyle = 'yellow';
    context.strokeStyle = 'black';
    // fillRect(x, y, w, h)
    context.rect(10, 20, 200, 100);
    context.fill();
    context.stroke();
}

