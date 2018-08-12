let storage = window.localStorage;
console.log(sololearnCount);
let count = storage.getItem("sololearn");
sololearnCount.innerHTML = count;
sololearnCount.addEventListener("click", function () {
    count++;
    sololearnCount.innerHTML = count;
    storage.setItem("sololearn", count)
})