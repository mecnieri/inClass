// bubling 
// create event 

const container = document.querySelector('.container');
const contentBox = document.querySelector('.content__box');
const pElement = document.querySelector('p');

// container.addEventListener('click', function click(event) {
//     console.log("Container Div");
// }, false)

// contentBox.addEventListener('click', function click(event) {
//     console.log("contentBox Div");
// }, false)

// pElement.addEventListener('click', function click(event) {
//     console.log("p tag");
//     // event.stopImmediatePropagation();
//     // event.stopPropagation()
// }, false)

// pElement.addEventListener('click', function click(event) {
//     console.log("p tag 2");
//     event.stopPropagation()
// }, false)

// false - babling // ქვემოდან ზემოთ
// true - capturing // ზემოდან ქვემოთ 


/////////////////////////

// create event 

// const myEvent = document.createEvent('CustomEvent'); //CustomEvent is built-in 


// pElement.addEventListener('myCustomEvent', function (event) {
//     console.log(event);

// })

// contentBox.addEventListener('myCustomEvent', function (event) {
//     console.log(event.detail );

// })


// const info = {
//     name: "myCustomEvent",
//     id: 2018,
// }

// myEvent.initCustomEvent('myCustomEvent', true, false, info)
// pElement.dispatchEvent(myEvent)

const table = document.querySelector('table')

table.addEventListener('click', ({ target }) => {
    if (target.tagName.toLowerCase() === 'td') {
        console.log(target.textContent);
    }
});