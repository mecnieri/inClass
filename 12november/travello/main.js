const imgUrls = [
    './images/download (1).jfif',
    './images/download (2).jfif',
    './images/download (3).jfif',
    './images/download.jfif',
    './images/images (1).jfif',
    './images/images (2).jfif',
    './images/images (3).jfif',
    './images/images (4).jfif',
    './images/images.jfif',
]

console.log(imgUrls);

const changeImgs = (arr) => {
    for (i = 1; i < arr.length; i++) {
        document.getElementById('img' + i).innerHTML = `<img src="${arr[i - 1]}">`
    }
}
changeImgs(imgUrls)


document.getElementById("myBtn").addEventListener("click", function () {
    let elem = document.getElementById("slider");
    let pos = 0;
    let count = 0;
    count--;
    let id = setInterval(frame, 5);

    function frame() {
        if (pos == count * 200) {
            clearInterval(id);
        } else {
            pos--;
            elem.style.left = pos + 'px';
        }
    }



})
