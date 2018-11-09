window.onload = function(){
    let canvas = document.getElementById('myCanvas');
    let context = canvas.getContext('2d');

    context.strokeStyle = 'red';
    context.lineWidth = 10;
    context.fillStyle ='black';
    context.beginPath();
    context.moveTo(150, 20);
    context.lineTo(75, 200);
    context.lineTo(225, 200);
    context.lineTo(150, 20);

    // context.lineJoin = 'miter';
    // context.lineTo(0, 50);
    

    context.closePath();
    context.stroke();
    
    context.fill();
    
}