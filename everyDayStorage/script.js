let arr = []
let storage = window.localStorage;
let minute = new Date().getMinutes()

class Objs {
    constructor(dateMinute, ud, free, fun, code) {
        this.dateMinute = dateMinute,
            this.ud = ud,
            this.free = free,
            this.fun = fun,
            this.code = code
    }
}
arr = JSON.parse(storage.getItem("Daily Results"));
console.log(arr[0]);
console.log(++arr[0].ud);
console.log(++arr[0].ud);
console.log(++arr[0].ud);
console.log(++arr[0].ud);
console.log(++arr[0].ud);
console.log(arr[0]);
console.log(arr);




storage.setItem("Daily Results", JSON.stringify(arr))








// if (minute !== JSON.parse(storage.getItem("Daily Results"))[0].dateMinute) {
    // create new day
    // arr.unshift(new Objs(40, 3, 4, 5, 6))
    // console.log(arr);

// } else {
    // update new day 
//  }
