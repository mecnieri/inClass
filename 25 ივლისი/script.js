// asynchron
// setInterval 
// setTimeout
// algorytm
// web applications 
// DOM
// dataset 

// let divElement = document.createElement('div')
// console.log(divElement);
// document.body.appendChild(divElement);

// divElement.textContent = " Dynmic text... "
// divElement.classList.add('box')

// let liElement = document.createElement('li')
// liElement.innerText = "Li element"

// liElement.style.fontSize = '20px'
// liElement.append(" Append string ")
// // insert before \after
// let strongElement = document.createElement('strong')
// strongElement.textContent = " I am strong element "
// liElement.append(strongElement)

// // myList.insertBefore(liElement, myList.children[2])
// myList.children[1].after(liElement)
// let clonedLiElement = liElement.cloneNode(true) // false shigtavs ar aklonirebs 
// myList.children[1].after(clonedLiElement)

// // myList.children[1].replaceWith(liElement)



// myList.children[myList.children.length-1].remove()


// let removeElement =  myList.children[myList.children.length-1]

// myList.removeChild(removeElement)

// console.log(removeElement);

// console.log(myList.children);
// // console.log(myList.children.length);

// function clear(elem) {
//     // for (let i = 0; i < elem.children.length + 2; i++) {
//     //     elem.removeChild(elem.children[0]);
//     //     // console.log(elem.children[i]);
//     while (elem.children) {
//         elem.removeChild(elem)
//     }

// }

// clear(myList)

// console.log(myList.children);


// // while (myList.children) {
// //     myList.removeChild(elem)
// // }


// let liOne = document.createElement('li')
// liOne.innerText = "2"
// let liTwo = document.createElement('li')
// liTwo.innerText = "3"

// ul.children[0].after(liOne)
// ul.children[1].after(liTwo)

// new Date(year, month, 0).getDate(); count days 



let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
let weli = prompt("Please enter year", 2018)
let tve = prompt("Please enter month number", 1)

function calen(year, month) {

    let date = new Date(year, month, 1, 5);
    let day = date.getDay();
    let count = new Date(year, Number(month) + 1, 0).getDate();
    let t = tbody.children;
    let arr = [];

    y.innerText = year;
    m.innerText = months[month]
    
    for (let i = 0; i < t.length; i++) {
        let d = t[i].children;
        for (let j = 0; j < d.length; j++) {
            arr.push(d[j]);
        }
    }

    for (let x = day, y = 1; x < arr.length, y <= count; x++ , y++) {
        arr[x].innerText = y;
    }
}

calen(weli, Number(tve) - 1)