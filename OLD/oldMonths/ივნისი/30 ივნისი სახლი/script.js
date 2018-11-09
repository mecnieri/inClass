let params = {
    count: 2,
    tagName: "h2",
    parentSelector: "#para4",
    content: "obieqtidan h2 is damateba",
    childCount: "para4",
}



function name(arg) {
    for (let i = 0; i < arg.count; i++) {

        let elementNode = document.createElement(arg.tagName);
        let elementText = document.createTextNode(arg.content);

        let parentId = document.querySelector(arg.parentSelector);


        parentId.appendChild(elementNode);
        elementNode.appendChild(elementText);

    }
    var c = document.getElementById(arg.childCount).childElementCount;
    document.getElementById("demo").innerHTML = c;

    document.getElementsByTagName("H2")[0].setAttribute("id", "gawitleba").setAttribute("class", "gawitleba");

}


name(params);