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

// Event delegation Example
// const table = document.querySelector('table')

// table.addEventListener('click', ({ target }) => {
//     if (target.tagName.toLowerCase() === 'td') {
//         console.log(target.textContent);
//     }
// });


$(document).ready(function () {
    // DOM loaded 
    // alert("DOM")


    // $(selectorExpression)


    // const divElements = $('div, p')
    // console.log(divElements);




    // let trElements = $('table tr')
    // console.log(trElements);

    let customerDiv = $('#customerDiv')
    // console.log(customerDiv);

    // let wowClass = $('.wow')
    // console.log(wowClass);

    // const multipleClasses = $('.wow, .content__box')
    // console.log(multipleClasses);


    // const table = $('table[border]')
    // console.log(table);

    // const span = $('span:contains("site")')
    // console.log(span);


    const oddTr = $('tr:odd')
    // console.log(oddTr);

    const evenTr = $('tr:even')
    // console.log(evenTr);

    evenTr.each(function (index, element) {
        // console.log(element, index, element.innerText);
        // console.log($(this).text());
        // console.log($(this).text());
        this.title = `Current Index - ${index}`
    })

    let attrVal = customerDiv.attr('class', "daasd")
    console.log(attrVal);

})