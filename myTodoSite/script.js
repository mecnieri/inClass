let storage = window.localStorage;
let now = new Date();
let month = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
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
    get minimumNeeded() {
        return this.calcMin;
    }
    calcMin() {
        return Math.round((this.allTasks - this.doneTasks) / this.left())
    }
}
let freecodeVids = new Todo(4, 'freecodeVids', 0, 100, new Date(2018, 7, 14), new Date(2018, 8, 17));
let algorithms = new Todo(7, 'algorithms', 43, 133, new Date(2018, 8, 11), new Date(2018, 8, 24));
let udemy = new Todo(6, 'udemy', 63, 155, new Date(2018, 8, 4), new Date(2018, 8, 24));
let fundamentals = new Todo(8, 'fundamentals', 13, 85, new Date(2018, 8, 11), new Date(2018, 8, 24));
let arr = [freecodeVids, algorithms, fundamentals, udemy];
let sound = new Audio();
sound.src = "Button Positive.mp3";
if (storage.freecodeVids !== "undefined") {
    freecodeVids.doneTasks = storage.getItem("freecodeVids");
    algorithms.doneTasks = storage.getItem("algorithms");
    fundamentals.doneTasks = storage.getItem("fundamentals");
    udemy.doneTasks = storage.getItem("udemy");
}
 
 function updateTable(obj) {
    document.getElementById('dt' + obj.id).innerHTML = obj.doneTasks;
    document.getElementById('pr' + obj.id).innerHTML = obj.progress();
    document.getElementById('advnc' + obj.id).innerHTML = obj.advanced();
    document.getElementById('tmp' + obj.id).innerHTML = obj.timeProgress;
    document.getElementById('allTasks' + obj.id).innerHTML = obj.allTasks;
    document.getElementById('st' + obj.id).innerHTML = obj.start.getDate() + " " + (month[obj.start.getMonth()]);
    document.getElementById('dl' + obj.id).innerHTML = obj.end.getDate() + " " + (month[obj.end.getMonth()])
    document.getElementById('dr' + obj.id).innerHTML = obj.duration();
    document.getElementById('dayLft' + obj.id).innerHTML = obj.left();
    document.getElementById('mntd' + obj.id).innerHTML = obj.minimumNeeded();
    for (let i = 1; i <= 8; i++) {
        let a = document.querySelector('#advnc' + i).style;
        let b = document.querySelector('#advnc' + i).innerText.slice(0, -1)
        if (b <= -10) {
            a.background = 'red'
        } else if (b < 0) {
            a.background = 'pink'
        } else if (b < 10 && b > 0) {
            a.background = 'lightgreen'
        } else if (b >= 10) {
            a.background = 'green'
        } else {
            a.background = 'silver'
        }
    }
}
for (o of arr) { updateTable(o) }
document.querySelector('.doneTasks').addEventListener('click', function (e) {
    let idd = Number(e.target.id.slice(2));
    let ob = arr.find(t => t.id === idd);
    ob.doneTasks++;
    storage.setItem(`${ob.name}`, ob.doneTasks)
    ob.doneTasks = storage.getItem(`${ob.name}`);
    sound.play();
    updateTable(ob)
});

// #region show only main 

if (myCheck.checked) {
    function checkFunc() {
        if (myCheck.checked == true) {
            document.querySelectorAll('.startingTime')[0].style.display = "none";
            document.querySelectorAll('.duration')[0].style.display = "none";
            document.querySelectorAll('.deadLine')[0].style.display = "none";
            document.querySelectorAll('.allTasks')[0].style.display = "none";
            document.querySelectorAll('.timeProgress')[0].style.display = "none";
            document.querySelectorAll('.daysLeft')[0].style.display = "none";
        }
        else {
            document.querySelectorAll('.startingTime')[0].style.display = "block";
            document.querySelectorAll('.duration')[0].style.display = "block";
            document.querySelectorAll('.deadLine')[0].style.display = "block";
            document.querySelectorAll('.allTasks')[0].style.display = "block";
            document.querySelectorAll('.timeProgress')[0].style.display = "block";
            document.querySelectorAll('.daysLeft')[0].style.display = "block";
        }
    }
    checkFunc()
}

//#endregion 


// pr3.style.background = 'rgb(' + 200 + ',' + 100 + ',' + 192 + ')'










