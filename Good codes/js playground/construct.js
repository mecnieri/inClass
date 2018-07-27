function Calculator() {
    this.calculate = function (str) {
        if (str.split(" ")[1] == "+") {
            sum = Number(str.split(" ")[0]) + Number(str.split(" ")[2]);
            return sum;
        }
        else if (str.split(" ")[1] == "-") {
            sum = Number(str.split(" ")[0]) - Number(str.split(" ")[2]);
            return sum;
        }
        // else{
        //     this.addOperator(name, func);
        // }
    }

    this.addOperator = function (name, func) {
        calculate.call() = function (str) {
            str.split(" ")[1] = name;
            func = function (a, b) {
                a * b
            }
        }
    }
}



let calc = new Calculator();
console.log(calc.calculate("18 + 2"));

let powerCalc = new Calculator();
powerCalc.addOperator("*", (a, b) => a * b);

let result = powerCalc.calculate("2**3");
console.log(result);







powerCalc.addOperator("/", (a, b) => a / b);
powerCalc.addOperator("**", (a, b) => a ** b);
