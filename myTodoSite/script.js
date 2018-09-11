let storage = window.localStorage;
let now = new Date()
let month = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
class Todo {
    constructor(id, doneTasks, allTasks, start, end) {
        this.id = id;
        this.doneTasks = doneTasks;
        this.allTasks = allTasks;
        this.start = start;
        this.allTasks = allTasks;
        this.end = end;
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
let freecodeVids = new Todo(3, 0, 100, new Date(2018, 7, 14), new Date(2018, 8, 17));
let algorithms = new Todo(7, 43, 133, new Date(2018, 8, 11), new Date(2018, 8, 24));
let udemy = new Todo(6, 63, 155, new Date(2018, 6, 11), new Date(2018, 8, 24));
let fundamentals = new Todo(8, 13, 85, new Date(2018, 8, 11), new Date(2018, 8, 24));
let sound = new Audio()
sound.src = "Button Positive.mp3"
let arr = [freecodeVids, algorithms, fundamentals, udemy]
if (storage[3] == "undefined") {
    freecodeVids.doneTasks = 0;
} else {
    freecodeVids.doneTasks = storage.getItem("3");
    algorithms.doneTasks = storage.getItem("7");
    fundamentals.doneTasks = storage.getItem("8");
    udemy.doneTasks = storage.getItem("6");

}


function inserts(obj) {
    document.getElementById('dt' + obj.id).innerHTML = obj.doneTasks;
    document.getElementById('pr' + obj.id).innerHTML = Math.round((obj.doneTasks / obj.allTasks) * 100) + "%"
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
    storage.setItem(`${ob.id}`, ob.doneTasks)
    ob.doneTasks = storage.getItem(`${ob.id}`);
    sound.play();
    inserts(ob)
});
