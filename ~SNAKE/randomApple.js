let canvas = document.getElementById('canvas')
let context = canvas.getContext('2d')

function createApples(quantity) {
    for (let i = 0; i < quantity; i++) {
        let x = Math.floor(Math.random() * 200)
        let y = Math.floor(Math.random() * 200)
        context.beginPath();
        context.arc(x, y, 5, 0, Math.PI * 2, false);
        context.fillStyle = 'red';
        context.fill();
    }
}
createApples(3)



