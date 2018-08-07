
let params = {
    grandParentSelector: "#para2",

    parentTagName: "div",
    pAttName: "class",
    pAttValue: "red",

    elementTagName: "div",
    content: "0",
    attName: "id",
    attValue: "green",
    count: 15,
    
}

document.getElementById("addDaybutton").addEventListener("click", function () {

    function name(arg) {

    let grandParentClass = document.querySelector(arg.grandParentSelector);
    let parentNode = document.createElement(arg.parentTagName);

    grandParentClass.appendChild(parentNode).setAttribute(arg.pAttName, arg.pAttValue);

 
        for (let i = 0; i < arg.count; i++) {

            let parentId = document.querySelector(arg.pAttValue);

            let elementNode = document.createElement(arg.elementTagName);
            let elementText = document.createTextNode(arg.content);

            parentId.appendChild(elementNode).setAttribute(arg.attName, arg.attValue);
            elementNode.appendChild(elementText);
        }
    }
    name(params);
});