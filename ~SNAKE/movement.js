let canvas = document.getElementById('canvas')
let context = canvas.getContext('2d');
let x = 20, y = 20;
let width = 8;
let height = 8;
let speed = 10;
let fps = 10;

function clear() {
    context.clearRect(0, 0, 300, 300);
}
function draw() {
    context.fillRect(x, y, 8, 8);
}

function update() {
    x += speed;
}

setInterval(function () {
    clear()
    update()
    draw()

}, 1000 / fps);



// addEventListener("keydown",function(e){
//     console.log(e.key)
//     function draw() {

//         switch (e.key) {
//             case "ArrowRight":
//             if(x+20 < canvas.width){
//                 context.clearRect(0,0, canvas.width, canvas.height);
//                 context.beginPath();
//                 x+=20;
//                 context.fillRect(x,y, 20, 20);
//                 }
//                 break;

//             case "ArrowDown":
//                 if(e.key === "ArrowDown"){
//                         if(y+20 < canvas.height){
//                             context.clearRect(0,0, canvas.width, canvas.height);
//                             context.beginPath();
//                             y+=20;
//                             context.fillRect(x,y, 20, 20);
//                             }
//                         }
//                             break;

// case "ArrowUp":
//                             if(e.key === "ArrowUp"){
//                                     if(y-20 > 0){
//                                         context.clearRect(0,0, canvas.width, canvas.height);
//                                         context.beginPath();
//                                         y-=20;
//                                         context.fillRect(x,y, 20, 20);
//                                         }
//                                 }
//                                 break;


//             default:
//                 break;
//         }

        // if(e.key === "ArrowRight"){
        //         if(x+20 < canvas.width){
        //             context.clearRect(0,0, canvas.width, canvas.height);
        //             context.beginPath();
        //             x+=20;
        //             context.fillRect(x,y, 20, 20);
        //             }
        // }
        // if(e.key === "ArrowDown"){
        //     if(y+20 < canvas.height){
        //         context.clearRect(0,0, canvas.width, canvas.height);
        //         context.beginPath();
        //         y+=20;
        //         context.fillRect(x,y, 20, 20);
        //         }
        // }

        // if(e.key === "ArrowUp"){
        //     if(y-20 > 0){
        //         context.clearRect(0,0, canvas.width, canvas.height);
        //         context.beginPath();
        //         y-=20;
        //         context.fillRect(x,y, 20, 20);
        //         }
        // }


//     }

//     setInterval(draw,100)
// })