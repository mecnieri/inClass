let storage = window.localStorage;
console.log(sololearnCount);
sololearnCount.innerHTML = count;
sololearnCount.addEventListener("click", function () {
    count++;
    storage.setItem("sololearn", count)
    count = storage.getItem("sololearn");
    sololearnCount.innerHTML = count;
})