let storage = window.localStorage;
console.log(sololearnCount);
sololearnCount.innerHTML = count;
sololearnCount.addEventListener("click", function () {
    count++;
    sololearnCount.innerHTML = count;
    storage.setItem("sololearn", count)
    let count = storage.getItem("sololearn");
})