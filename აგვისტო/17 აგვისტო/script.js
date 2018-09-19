//  უკან დაბრუნება 

let fnt, clr, brd;

class SpecialMath {
    constructor(num) {
        this._number = num;
    }
    fontsize(fnt) {
        fntsz.addEventListener("change", function () {
            fnt = fntsz.value
            myP.style.fontSize = fnt + "px"
            // console.log(fnt);

        })
        return fnt;
    }
    color() {
        color.addEventListener("change", function () {
            clr = color.value
            console.log(clr);
            myP.style.color = clr
        })
    }
    border() {

        brdr.addEventListener("change", function () {
            brd = brdr.value
            console.log(brd);
            div.style.borderWidth = brd + "px"
        })
    }
}
class Command {
    constructor(obj) {
        this._subject = obj
        this.commandsExecuted = []
        this.values = []
    }
    execute(command) {
        this.commandsExecuted.push(command)
        return this._subject[command]()
    }

    executeValue(value) {
        this.values.push(value)
        console.log(myNum.values);
        return this._subject.value
    }
}
const myNum = new Command(new SpecialMath(9))

console.log(myNum.execute('fontsize'));
console.log(myNum.execute('border'));
console.log(myNum.execute('color'));
console.log(myNum.commandsExecuted);

console.log(myNum.executeValue(fnt));
console.log(myNum.values);




