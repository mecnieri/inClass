
class Apple {
    constructor() {
        this.x = Math.floor(Math.random() * 20)
        this.y = Math.floor(Math.random() * 20)
        this.radius = (gs - 8) / 2;
        this.color = "red"
        this.startAngle = 0;
        this.endAngle = Math.PI * 2;
    }
    draw() {
        for (let i = 0; i < quantity; i++) {
            ctx.beginPath();
            ctx.fillStyle = this.color;
            ctx.arc(this.x * 20 + 10, this.y * 20 + 10, this.radius, this.startAngle, this.endAngle);
            ctx.fill()
        }
    }
} 