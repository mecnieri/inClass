let tag = document.createElement("span");
var teqsti = document.createTextNode("1");
tag.appendChild(teqsti);
let misamarti = document.getElementById("container");

console.log(misamarti);
let arr = []
for (let i = 0; i < 150; i++) {
    let tag = document.createElement("span");
    let teqsti = document.createTextNode(i);
    tag.appendChild(teqsti);
    let misamarti = document.getElementById("container");

    

    arr.push(tag)

}

console.log(arr);
misamarti.appendChild(arr)