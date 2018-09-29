
class Apple {
    constructor() {
        this.x = Math.floor(Math.random() * 20)
        this.y = Math.floor(Math.random() * 20)
        this.radius = (gs - gs*0.4) / 2;
        this.color = "red"
        this.startAngle = 0;
        this.endAngle = Math.PI * 2;
    }
    draw() {
        for (let i = 0; i < quantity; i++) {
            ctx.beginPath();
            ctx.fillStyle = this.color;
            ctx.arc(this.x * gs + gs/2, this.y * gs + gs/2, this.radius, this.startAngle, this.endAngle);
            ctx.fill()
        }
    }
} 