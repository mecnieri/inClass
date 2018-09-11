let storage = window.localStorage;
let now = new Date()
let month = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
class Todo {
    constructor(id, name, doneTasks, allTasks, start, end) {
        this.id = id;
        this.name = name;
        this.doneTasks = doneTasks;
        this.allTasks = allTasks;
        this.start = start;
        this.allTasks = allTasks;
        this.end = end;
        this.timeProgress = Math.round((this.duration() - this.left()) / this.duration() * 100) + "%";
    }
    get progress() {
        return this.calcProgress;
    }
    calcProgress() {
        return Math.round((this.doneTasks / this.allTasks) * 100) + "%";
    }
    get advanced() {
        return this.calcAdvance;
    }
    calcAdvance() {
        return this.progress().slice(0, -1) - this.timeProgress.slice(0, -1) + '%';
    }
    get duration() {
        return this.calcDuration;
    }
    calcDuration() {
        return Math.round(this.end - this.start) / 1000 / 60 / 60 / 24;
    }
    get left() {
        return this.calcLeft;
    }
    calcLeft() {
        return Math.round((this.end - now) / 1000 / 60 / 60 / 24);
    }
}
let freecodeVids = new Todo(4, 'freecodeVids', 0, 100, new Date(2018, 7, 14), new Date(2018, 8, 17));
let algorithms = new Todo(7, 'algorithms', 43, 133, new Date(2018, 8, 11), new Date(2018, 8, 24));
let udemy = new Todo(6, 'udemy', 63, 155, new Date(2018, 6, 11), new Date(2018, 8, 24));
let fundamentals = new Todo(8, 'fundamentals', 13, 85, new Date(2018, 8, 11), new Date(2018, 8, 24));
let sound = new Audio()
sound.src = "Button Positive.mp3"
let arr = [freecodeVids, algorithms, fundamentals, udemy]
if (storage.freecodeVids == "undefined") {
    freecodeVids.doneTasks = 0;
} else {
    freecodeVids.doneTasks = storage.getItem("freecodeVids");
    algorithms.doneTasks = storage.getItem("algorithms");
    fundamentals.doneTasks = storage.getItem("fundamentals");
    udemy.doneTasks = storage.getItem("udemy");

}

function inserts(obj) {
    document.getElementById('dt' + obj.id).innerHTML = obj.doneTasks;
    document.getElementById('pr' + obj.id).innerHTML = obj.progress();
    document.getElementById('advnc' + obj.id).innerHTML = obj.advanced();
    document.getElementById('tmp' + obj.id).innerHTML = obj.timeProgress;
    document.getElementById('allTasks' + obj.id).innerHTML = obj.allTasks;
    document.getElementById('st' + obj.id).innerHTML = obj.start.getDate() + " " + (month[obj.start.getMonth()]);
    document.getElementById('dl' + obj.id).innerHTML = obj.end.getDate() + " " + (month[obj.end.getMonth()])
    document.getElementById('dr' + obj.id).innerHTML = obj.duration();
    document.getElementById('dayLft' + obj.id).innerHTML = obj.left();

}
inserts(freecodeVids);
inserts(algorithms);
inserts(fundamentals);
inserts(udemy);

document.querySelectorAll('.doneTasks')[0].addEventListener('click', function (e) {
    let idd = Number(e.target.id.slice(2));
    let ob = arr.find(t => t.id === idd);
    ob.doneTasks++;
    storage.setItem(`${ob.name}`, ob.doneTasks)
    ob.doneTasks = storage.getItem(`${ob.name}`);
    sound.play();
    inserts(ob)
});

function checkFunc() {
    var checkBox = document.getElementById("myCheck");
    if (checkBox.checked == true) {
        document.querySelectorAll('.startingTime')[0].style.display = "none";
        document.querySelectorAll('.duration')[0].style.display = "none";
        document.querySelectorAll('.deadLine')[0].style.display = "none";
        document.querySelectorAll('.allTasks')[0].style.display = "none";
        document.querySelectorAll('.timeProgress')[0].style.display = "none";
    }
    else {
        document.querySelectorAll('.startingTime')[0].style.display = "block";
        document.querySelectorAll('.duration')[0].style.display = "block";
        document.querySelectorAll('.deadLine')[0].style.display = "block";
        document.querySelectorAll('.allTasks')[0].style.display = "block";
        document.querySelectorAll('.timeProgress')[0].style.display = "block";
    }
}
