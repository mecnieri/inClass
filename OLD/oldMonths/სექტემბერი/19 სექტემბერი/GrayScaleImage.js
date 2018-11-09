window.onload = function () {
    const canvas = document.getElementById('canvas');
    const ctx = canvas.getContext('2d');

    // getImageData 
    // createImageData 
    // putImegeData(imgData, dx, dy, x, y, width, heigh)

    let img = new Image();

    img.onload = function () {
        ctx.drawImage(img,
            0,
            0,
            200, 200);
        grayScale()
    }

    img.src = 'download.img';

    function grayScale() {
        let pixels = ctx.getImageData(0, 0, canvas.width, canvas.height)
        // console.log(pixels);
        let data = pixels.data;
        for (let i = 0; i < data.length; i += 4) {
            // console.log(`Red - ${data[i]}, Green - ${data[i + 1]} , Blue - ${data[i + 2]}`);
            if (data[i] > 100) {
                data[i] = 0;
                data[i + 1] = 0;
                data[i + 2] = 0;

            }
        }
        ctx.putImageData(pixels, 0, 0)

    }
}