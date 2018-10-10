class Apple {
    constructor() {
        this.x = Math.floor(Math.random() * 20) // create apple randomly 
        this.y = Math.floor(Math.random() * 20)
        this.radius = (gs - gs*0.4) / 2;
        this.color = "red"
        this.startAngle = 0;
        this.endAngle = Math.PI * 2;
    }
    draw() {
            ctx.beginPath();
            ctx.fillStyle = this.color;
            ctx.arc(this.x * gs + gs/2, this.y * gs + gs/2, this.radius, this.startAngle, this.endAngle);
            ctx.fill()
    }
}