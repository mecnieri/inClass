let storage = window.localStorage;

// sololearn

if (storage.sololearn == "undefined") {
    let countSolo = 0;
    storage.setItem("sololearn", countSolo)
    sololearnCount.innerHTML = countcountSolo;
}
let countSolo = storage.getItem("sololearn");
sololearnCount.innerHTML = countSolo;

sololearnCount.addEventListener("click", function () {
    countSolo++;
    sololearnCount.innerHTML = countSolo;
    storage.setItem("sololearn", countSolo)
    countSolo = storage.getItem("sololearn");
    console.log(countSolo);
})


for (let i = 1; i <= 6; i++) {
    let now = new Date()
    let tomorrow = new Date(2018, 8, 18, 5)
    let result = Math.round((tomorrow - now) / 1000 / 60 / 60 / 24);


    document.getElementById("dayLft" + i).innerHTML = result
}