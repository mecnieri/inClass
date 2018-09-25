
class Apple {
    constructor() {
        this.x = Math.floor(Math.random() * 10)
        this.y = Math.floor(Math.random() * 10)
        this.radius = (gs - 2) / 2;
        this.color = "red"
        this.startAngle = 0;
        this.endAngle = Math.PI * 2;
        this.coordinates = []
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