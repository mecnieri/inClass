window.onload = function () {
    let storage = JSON.parse(window.localStorage.getItem(["Daily Results"]));
    let udemyArr = []
    let dateArr = []
    let fundamentalsArr = []


    for (let i = 0; i < storage.length; i++) {
        udemyArr.push(storage[i].udemy)
        dateArr.push(storage[i].date)
        fundamentalsArr.push(storage[i].fundamentals)
    }

    console.log(udemyArr);
    console.log(dateArr);
    console.log(fundamentalsArr);


    dateArr.push(15)
    dateArr.push(25)
    dateArr.push(35)
    dateArr.push(5)
    dateArr.push(23)
    const canvas = document.getElementById('canvas');
    const ctx = canvas.getContext('2d');

    const width = 20;
    let currentX = 10;
    // dateArr.reverse()
    // ctx.translate(200, 150);
    // ctx.rotate(1 * Math.PI);
    ctx.fillStyle = 'seagreen';
    console.log(ctx);
    dateArr.forEach((el, index) => {
        ctx.fillRect(currentX, 210, width, -(el * 5))
        currentX += width + 10;
    })
}
