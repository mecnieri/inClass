let storage = window.localStorage;
let now = new Date()

// sololearn

if (storage.sololearn == "undefined") {
    let countSolo = 0;
    storage.setItem("sololearn", countSolo)
    dt1.innerHTML = countcountSolo;
}
let countSolo = storage.getItem("sololearn");
dt1.innerHTML = countSolo;

dt1.addEventListener("click", function () {
    countSolo++;
    dt1.innerHTML = countSolo;
    storage.setItem("sololearn", countSolo)
    countSolo = storage.getItem("sololearn");
    console.log(countSolo);
})


for (let i = 1; i <= 6; i++) {
    let tomorrow = new Date(2018, 8, 18, 5)
    let result = Math.round((tomorrow - now) / 1000 / 60 / 60 / 24);

    document.getElementById("dayLft" + i).innerHTML = result
}

let freecodeVids = {
    doneTasks: 3,
    allTasks: 100,
    start: new Date(2018, 7, 14),
    end: new Date(2018, 8, 17),
    duration() {
        return Math.round(this.end - this.start) / 1000 / 60 / 60 / 24;
    },
    left(){
        return Math.round((this.end - now) / 1000 / 60 / 60 / 24);
    }
};
 
(function inserts() {
    pr3.innerHTML = (freecodeVids.doneTasks/freecodeVids.allTasks)*100 + "%"
    dt3.innerHTML = freecodeVids.doneTasks;
    allTasks3.innerHTML = freecodeVids.allTasks;

    st3.innerHTML = freecodeVids.start.getDate() + " - " + (freecodeVids.start.getMonth() + 1);
    dl3.innerHTML = freecodeVids.end.getDate() + " - " + (freecodeVids.end.getMonth() + 1)
    dr3.innerHTML = freecodeVids.duration();
    dayLft3.innerHTML = freecodeVids.left();
    
})()
