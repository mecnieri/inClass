
// let params = {
//     grandParentSelector: "#para2",

//     ptagName: "div",
//     pattName: "class",
//     pattValue: "red",

//     //     content: "0",

//     //     attName: "id",
//     //     attValue: "mwvane",

//     //     count: 15,
//     //     childCount: "para4",
// }

// document.getElementById("addDaybutton").addEventListener("click", function () {
//     function name(arg) {

//         let parentNode = document.createElement(arg.parenttagName);
//         let grandParentId = document.querySelector(arg.grandParentSelector);

//         grandParentId.appendChild(parentNode).setAttribute(arg.attName, arg.attValue);

//         for (let i = 0; i < arg.count; i++) {

//             let elementNode = document.createElement(arg.tagName);
//             let ParentId = document.querySelector(arg.parentSelector);
//             let elementText = document.createTextNode(arg.content);

//             grandParentId.appendChild(elementNode).setAttribute(arg.attName, arg.attValue);
//             elementNode.appendChild(elementText);
//         }
//     }
//     name(params);
// });



let params = {
    grandParentSelector: "#para2",

    parentTagName: "div",
    pAttName: "id",
    pAttValue: "green",

    elementTagName: "div",
    // content: "0",
    attName: "id",
    attValue: "green",
    count: 15,
    
}

document.getElementById("addDaybutton").addEventListener("click", function () {

    function name(arg) {

    let grandParentClass = document.querySelector(arg.grandParentSelector);
    console.log(grandParentClass);
    let parentNode = document.createElement(arg.parentTagName);

    grandParentClass.appendChild(parentNode).setAttribute(arg.pAttName, arg.pAttValue);

 
        for (let i = 0; i < arg.count; i++) {

             let parentId = document.getElementById(arg.pAttValue);
            console.log(parentId);
             let elementNode = document.createElement(arg.elementTagName);
             let elementText = document.createTextNode(i);
             parentId.appendChild(elementNode).setAttribute(arg.attName, arg.attValue);
            elementNode.appendChild(elementText);
        }
    }
    name(params);
});