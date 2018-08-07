document.getElementById("removeDay").addEventListener("click", function () {

     // Removes an element from the document
    let element = document.querySelector(".cla").lastElementChild;
    element.parentNode.removeChild(element);
    a--;
});