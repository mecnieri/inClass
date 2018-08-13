let storage = window.localStorage;
if (storage.sololearn == "undefined") {
    let count = 0;
    storage.setItem("sololearn", count)
    sololearnCount.innerHTML = count;
}
let count = storage.getItem("sololearn");

sololearnCount.addEventListener("click", function () {
    count++;
    sololearnCount.innerHTML = count;
    storage.setItem("sololearn", count)
    count = storage.getItem("sololearn");
    console.log(sololearnCount);
})


